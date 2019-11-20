import React from 'react';
import PropTypes from 'prop-types';

const ViewCourseLeftovers = ({ record }) => {
  const departmentObject = record.departmentObject || {};
  const courseListingObject = record.courseListingObject || {};
  const courseTypeObject = courseListingObject.courseTypeObject || {};

  return (
    <ul>
      <li><b>Description:</b> {record.description}</li>
      <li><b>Department description:</b> {departmentObject.description}</li>
      <li><b>Course type:</b> {courseTypeObject.name}</li>
    </ul>
  );
};

ViewCourseLeftovers.propTypes = {
  record: PropTypes.object.isRequired,
};

export default ViewCourseLeftovers;
