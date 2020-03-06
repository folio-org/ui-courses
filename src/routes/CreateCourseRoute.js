import React from 'react';
import PropTypes from 'prop-types';
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
    terms: {
      type: 'okapi',
      path: 'coursereserves/terms',
      shouldRefresh: () => false,
    },
    locations: {
      type: 'okapi',
      path: 'locations?limit=500&query=cql.allRecords=1 sortby name',
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
    const { handlers, stripes } = this.props;

    if (!stripes.hasPerm('course-reserves-storage.reserves.write')) return <NoPermissions />;

    return (
      <CourseForm
        data={{
          departments: getOptions(this, 'departments'),
          coursetypes: getOptions(this, 'coursetypes', 'courseTypes'),
          terms: getOptions(this, 'terms'),
          locations: getOptions(this, 'locations', null, '(None required)'),
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

export default stripesConnect(CreateCourseRoute);
