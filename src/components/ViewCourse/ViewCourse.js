import React from 'react';
import PropTypes from 'prop-types';
import ViewCourseSummary from './sections/ViewCourseSummary';
import ViewCourseDeveloper from './sections/ViewCourseDeveloper';


class ViewCourse extends React.Component {
  static propTypes = {
    record: PropTypes.object.isRequired,
    handlers: PropTypes.object,
  };

  render() {
    const { record, handlers } = this.props;

    return (
      <React.Fragment>
        <ViewCourseSummary record={record} />
        <ViewCourseDeveloper record={record} />
      </React.Fragment>
    );
  }
}

export default ViewCourse;
