import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import get from 'lodash/get';
import { stripesConnect } from '@folio/stripes/core';
import CourseForm from '../components/CourseForm';
import NoPermissions from '../components/NoPermissions';
import fetchIsPending from '../util/fetchIsPending';
import getOptions from '../util/getOptions';
import exciseObjects from '../util/exciseObjects';
import manifest from '../util/manifest';


class CrosslistCourseRoute extends React.Component {
  static manifest = Object.freeze({
    courses: {
      type: 'okapi',
      path: 'coursereserves/courses',
      fetch: false,
      shouldRefresh: () => false,
    },
    courselisting: {
      type: 'okapi',
      path: 'coursereserves/courselistings/:{clid}',
    },
    departments: manifest.departments,
    coursetypes: manifest.coursetypes,
    terms: manifest.terms,
    locations: manifest.locations,
    instructors: {
      type: 'okapi',
      path: 'coursereserves/courselistings/:{clid}/instructors',
      records: 'instructors',
    },
    reserves: {
      type: 'okapi',
      path: 'coursereserves/courselistings/:{clid}/reserves',
      records: 'reserves',
    },
  });

  static propTypes = {
    handlers: PropTypes.object,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
    location: PropTypes.shape({
      search: PropTypes.string.isRequired,
    }).isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired,
        clid: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    resources: PropTypes.shape({
      course: PropTypes.object,
      departments: PropTypes.object,
    }).isRequired,
    mutator: PropTypes.shape({
      courses: PropTypes.shape({
        POST: PropTypes.func.isRequired,
      }).isRequired,
      courselisting: PropTypes.shape({
        PUT: PropTypes.func.isRequired,
      }).isRequired,
    }).isRequired,
    stripes: PropTypes.shape({
      hasPerm: PropTypes.func.isRequired,
    }).isRequired,
    intl: PropTypes.shape({
      formatMessage: PropTypes.func.isRequired,
    }),
  };

  static defaultProps = {
    handlers: {},
  }

  handleClose = () => {
    const { location, match } = this.props;
    this.props.history.push(`/cr/courses/${match.params.id}${location.search}`);
  }

  handleSubmit = (course) => {
    const listing = exciseObjects(course.courseListingObject);
    delete course.courseListingObject;

    course.courseListingId = this.props.match.params.clid;
    this.props.mutator.courses.POST(course)
      .then(() => this.props.mutator.courselisting.PUT(listing))
      .then(this.handleClose);
  }

  getFirstOption(resource) {
    const entries = get(this.props.resources, `${resource}.records.0.${resource}`);
    return (!entries || !entries[0]) ? '1' : entries[0].id;
  }

  render() {
    const { handlers, stripes, intl } = this.props;

    if (!stripes.hasPerm('course-reserves-storage.courses.item.post')) return <NoPermissions />;

    return (
      <CourseForm
        data={{
          departments: getOptions(this, 'departments'),
          coursetypes: getOptions(this, 'coursetypes', 'courseTypes'),
          terms: getOptions(this, 'terms'),
          locations: getOptions(this, 'locations', null, intl.formatMessage({ id: 'ui-courses.options.noneRequired' })),
        }}
        handlers={{ ...handlers, onClose: this.handleClose }}
        initialValues={{
          departmentId: this.getFirstOption('departments'),
          courseListingObject: get(this.props.resources, 'courselisting.records[0]', {}),
        }}
        isLoading={fetchIsPending(this.props.resources)}
        onSubmit={this.handleSubmit}
        isCrosslist
      />
    );
  }
}

export default injectIntl(stripesConnect(CrosslistCourseRoute));
