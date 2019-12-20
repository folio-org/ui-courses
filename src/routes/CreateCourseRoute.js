import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { stripesConnect } from '@folio/stripes/core';
import CourseForm from '../components/CourseForm';
import NoPermissions from '../components/NoPermissions';

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
  };

  static defaultProps = {
    handlers: {},
  }

  handleClose = () => {
    const { location } = this.props;
    this.props.history.push(`/cr/courses${location.search}`);
  }

  handleSubmit = (course) => {
    const listing = course.courseListingObject;
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
        handlers={{ ...handlers, onClose: this.handleClose }}
        initialValues={{}}
        isLoading={this.fetchIsPending()}
        onSubmit={this.handleSubmit}
      />
    );
  }
}

export default stripesConnect(CreateCourseRoute);
