import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';

const ViewCourseLeftovers = ({ record }) => {
  return (
    <ul>
      <li><b>Course type:</b> {get(record, 'courseListingObject.courseTypeObject.name')}</li>
    </ul>
  );
};

ViewCourseLeftovers.propTypes = {
  record: PropTypes.object.isRequired,
};

export default ViewCourseLeftovers;
