import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import get from 'lodash/get';
import { stripesConnect } from '@folio/stripes/core';
import CourseForm from '../components/CourseForm';
import NoPermissions from '../components/NoPermissions';
import getOptions from '../util/getOptions';
import manifest from '../util/manifest';


class CreateCourseRoute extends React.Component {
  static manifest = Object.freeze({
    courses: {
      type: 'okapi',
      path: 'coursereserves/courses',
      fetch: false,
      shouldRefresh: () => false,
    },
    courselistings: {
      type: 'okapi',
      path: 'coursereserves/courselistings',
      fetch: false,
      shouldRefresh: () => false,
    },
    departments: manifest.departments,
    coursetypes: manifest.coursetypes,
    terms: manifest.terms,
    locations: manifest.locations,
  });

  static propTypes = {
    handlers: PropTypes.object,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
    location: PropTypes.shape({
      search: PropTypes.string.isRequired,
    }).isRequired,
    mutator: PropTypes.shape({
      courses: PropTypes.shape({
        POST: PropTypes.func.isRequired,
      }).isRequired,
      courselistings: PropTypes.shape({
        POST: PropTypes.func.isRequired,
      }).isRequired,
    }).isRequired,
    resources: PropTypes.shape({
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
    const { location } = this.props;
    this.props.history.push(`/cr/courses${location.search}`);
  }

  handleSubmit = (course) => {
    const listing = course.courseListingObject || {};
    delete course.courseListingObject;

    this.props.mutator.courselistings.POST(listing)
      .then((newListing) => {
        course.courseListingId = newListing.id;
        this.props.mutator.courses.POST(course);
      })
      .then(this.handleClose);
  }

  fetchIsPending = () => {
    return Object.values(this.props.resources)
      .filter(resource => resource)
      .some(resource => resource.isPending);
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
        initialValues={{
          departmentId: this.getFirstOption('departments'),
          courseListingObject: {
            termId: this.getFirstOption('terms'),
          },
        }}
        handlers={{ ...handlers, onClose: this.handleClose }}
        isLoading={this.fetchIsPending()}
        onSubmit={this.handleSubmit}
      />
    );
  }
}

export default injectIntl(stripesConnect(CreateCourseRoute));
