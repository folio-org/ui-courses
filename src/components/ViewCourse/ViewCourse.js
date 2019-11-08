import React from 'react';
import PropTypes from 'prop-types';

class ViewCourse extends React.Component {
  static propTypes = {
    record: PropTypes.object.isRequired,
    handlers: PropTypes.object,
  };

  render() {
    const { record, handlers } = this.props;
    const departmentObject = record.departmentObject || {};
    const courseListingObject = record.courseListingObject || {};
    const termObject = courseListingObject.termObject || {};
    const courseTypeObject = courseListingObject.courseTypeObject || {};

    return (
      <React.Fragment>
        <ul>
          <li><b>Name:</b>{record.name}</li>
          <li><b>Description:</b>{record.description}</li>
          <li><b>Department:</b>{departmentObject.name}</li>
          <li><b>Department description:</b>{departmentObject.description}</li>
          <li><b>Registrar ID:</b>{courseListingObject.registrarId}</li>
          <li><b>External ID:</b>{courseListingObject.externalId}</li>
          <li><b>Term:</b>{termObject.name}</li>
          <li><b>Start date:</b>{termObject.startDate}</li>
          <li><b>End date:</b>{termObject.endDate}</li>
          <li><b>Course type:</b>{courseTypeObject.name}</li>
          <li><b>Course number:</b>{record.courseNumber}</li>
          <li><b>Section:</b>{record.sectionName}</li>
        </ul>
        <pre>{JSON.stringify(record, null, 2)}</pre>
      </React.Fragment>
    );
  }
}

export default ViewCourse;
