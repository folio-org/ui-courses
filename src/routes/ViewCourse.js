import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { stripesConnect } from '@folio/stripes/core';
import Course from '../components/Course';


class ViewCourse extends React.Component {
  static manifest = Object.freeze({
    course: {
      type: 'okapi',
      path: 'coursereserves/courses/:{id}',
    },
  });

  static propTypes = {
    match: PropTypes.shape({ // used implicitly by manifest.course.path
      params: PropTypes.shape({
        id: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    location: PropTypes.shape({
      search: PropTypes.string.isRequired,
      pathname: PropTypes.string.isRequired,
    }).isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
    handlers: PropTypes.object,
    resources: PropTypes.shape({
      course: PropTypes.object,
    }).isRequired,
  };

  static defaultProps = {
    handlers: {},
  }

  urls = {
    edit: (() => `${this.props.location.pathname}/edit${this.props.location.search}`)
  }

  handleClose = () => {
    const { pathname, search } = this.props.location;
    this.props.history.push(`${pathname.replace(/(.*)\/.*/, '$1')}${search}`);
  }

  render() {
    const { handlers, resources } = this.props;
    return (
      <Course
        data={{
          course: {
            ...get(resources, 'course.records[0]', {}),
          },
        }}
        handlers={{
          ...handlers,
          onClose: this.handleClose,
          text: 'Some text'
        }}
        isLoading={get(resources, 'course.isPending', true)}
        urls={this.urls}
      />
    );
  }
}
export default stripesConnect(ViewCourse);
