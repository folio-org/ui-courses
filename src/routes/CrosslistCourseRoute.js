import React from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import { stripesConnect } from '@folio/stripes/core';
import CourseForm from '../components/CourseForm';
import NoPermissions from '../components/NoPermissions';

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
    departments: {
      type: 'okapi',
      path: 'coursereserves/departments',
      shouldRefresh: () => false,
    },
    coursetypes: {
      type: 'okapi',
      path: 'coursereserves/coursetypes',
      shouldRefresh: () => false,
    },
    terms: {
      type: 'okapi',
      path: 'coursereserves/terms',
      shouldRefresh: () => false,
    },
    locations: {
      type: 'okapi',
      path: 'locations',
      shouldRefresh: () => false,
    },
    servicepoints: {
      type: 'okapi',
      path: 'service-points',
      shouldRefresh: () => false,
    },
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
    mutator: PropTypes.shape({
      courses: PropTypes.shape({
        POST: PropTypes.func.isRequired,
      }).isRequired,
      courselisting: PropTypes.shape({
        PUT: PropTypes.func.isRequired,
      }).isRequired,
    }).isRequired,
    resources: PropTypes.shape({
      course: PropTypes.object,
      departments: PropTypes.object,
    }).isRequired,
    stripes: PropTypes.shape({
      hasPerm: PropTypes.func.isRequired,
    }).isRequired,
  };

  static defaultProps = {
    handlers: {},
  }

  getInitialValues = () => {
    const { resources } = this.props;
    const courselisting = get(resources, 'courselisting.records[0]', {});
    const initialValues = { courseListingObject: courselisting };
    const {
      department = {},
    } = initialValues;

    // Set the values of dropdown-controlled props as values rather than objects.
    initialValues.department = department.value;

    return initialValues;
  }

  handleClose = () => {
    const { location, match } = this.props;
    this.props.history.push(`/cr/courses/${match.params.id}${location.search}`);
  }

  handleSubmit = (course) => {
    const listing = course.courseListingObject;
    delete course.courseListingObject;

    course.courseListingId = this.props.match.params.clid;
    this.props.mutator.courses.POST(course)
      .then(() => this.props.mutator.courselisting.PUT(listing))
      .then(this.handleClose);
  }

  fetchIsPending = () => {
    return Object.values(this.props.resources)
      .filter(resource => resource)
      .some(resource => resource.isPending);
  }

  getOptions(resource, element) {
    return get(this.props.resources, `${resource}.records.0.${element || resource}`, [])
      .map(x => ({ value: x.id, label: x.name }));
  }

  render() {
    const { handlers, stripes } = this.props;

    if (!stripes.hasPerm('course-reserves-storage.reserves.write')) return <NoPermissions />;

    return (
      <CourseForm
        data={{
          departments: this.getOptions('departments'),
          coursetypes: this.getOptions('coursetypes', 'courseTypes'),
          terms: this.getOptions('terms'),
          locations: this.getOptions('locations'),
          servicepoints: this.getOptions('servicepoints'),
        }}
        initialValues={this.getInitialValues()}
        handlers={{ ...handlers, onClose: this.handleClose }}
        isLoading={this.fetchIsPending()}
        onSubmit={this.handleSubmit}
        isCrosslist
      />
    );
  }
}

export default stripesConnect(CrosslistCourseRoute);
