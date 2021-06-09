import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { stripesConnect } from '@folio/stripes/core';
import InstructorForm from '../components/InstructorForm';
import NoPermissions from '../components/NoPermissions';


class AddInstructorRoute extends React.Component {
  static manifest = Object.freeze({
    course: {
      type: 'okapi',
      path: 'coursereserves/courses/:{cid}',
      shouldRefresh: () => false,
    },
    instructors: {
      type: 'okapi',
      path: 'coursereserves/courselistings/:{clid}/instructors',
      fetch: false,
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
        clid: PropTypes.string.isRequired,
        cid: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    mutator: PropTypes.shape({
      instructors: PropTypes.shape({
        POST: PropTypes.func.isRequired,
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

  handleClose = () => {
    const { location } = this.props;
    this.props.history.push(`/cr/courses/${this.props.match.params.cid}${location.search}`);
  }

  handleSubmit = (instructor) => {
    this.props.mutator.instructors.POST(instructor)
      .then(this.handleClose);
  }

  fetchIsPending = () => {
    return Object.values(this.props.resources)
      .filter(resource => resource)
      .some(resource => resource.isPending);
  }

  render() {
    const { handlers, stripes, match } = this.props;

    if (!stripes.hasPerm('course-reserves-storage.courselistings.instructors.item.post')) return <NoPermissions />;

    return (
      <InstructorForm
        data={{ course: get(this.props.resources, 'course.records[0]') }}
        initialValues={{
          courseListingId: match.params.clid,
        }}
        handlers={{ ...handlers, onClose: this.handleClose }}
        isLoading={this.fetchIsPending()}
        onSubmit={this.handleSubmit}
      />
    );
  }
}

export default stripesConnect(AddInstructorRoute);
