import React from 'react';
import PropTypes from 'prop-types';
import { cloneDeep, get } from 'lodash';
import { stripesConnect } from '@folio/stripes/core';
import fetchIsPending from '../util/fetchIsPending';
import InstructorForm from '../components/InstructorForm';
import NoPermissions from '../components/NoPermissions';


class AddInstructorRoute extends React.Component {
  static manifest = Object.freeze({
    course: {
      type: 'okapi',
      path: 'coursereserves/courses/:{cid}',
      shouldRefresh: () => false,
    },
    instructor: {
      type: 'okapi',
      path: 'coursereserves/courselistings/:{clid}/instructors/:{iid}',
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
    match: PropTypes.shape({
      params: PropTypes.shape({
        cid: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    mutator: PropTypes.shape({
      instructor: PropTypes.shape({
        PUT: PropTypes.func.isRequired,
      }).isRequired,
    }).isRequired,
    resources: PropTypes.shape({
      course: PropTypes.object,
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
    const instructor = get(resources, 'instructor.records[0]', {});
    const initialValues = cloneDeep(instructor);
    return initialValues;
  }

  handleClose = () => {
    const { location } = this.props;
    this.props.history.push(`/cr/courses/${this.props.match.params.cid}${location.search}`);
  }

  handleSubmit = (instructor) => {
    this.props.mutator.instructor.PUT(instructor)
      .then(this.handleClose);
  }

  fetchIsPending = () => {
    return Object.values(this.props.resources)
      .filter(resource => resource)
      .some(resource => resource.isPending);
  }

  render() {
    const { handlers, stripes } = this.props;

    if (!stripes.hasPerm('course-reserves-storage.courselistings.instructors.item.put')) return <NoPermissions />;

    return (
      <InstructorForm
        data={{ course: get(this.props.resources, 'course.records[0]') }}
        handlers={{ ...handlers, onClose: this.handleClose }}
        initialValues={this.getInitialValues()}
        isLoading={fetchIsPending(this.props.resources)}
        onSubmit={this.handleSubmit}
      />
    );
  }
}

export default stripesConnect(AddInstructorRoute);
