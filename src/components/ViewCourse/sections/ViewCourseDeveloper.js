import React from 'react';
import PropTypes from 'prop-types';

const ViewCourseDeveloper = ({ record }) => (
  <pre>{JSON.stringify(record, null, 2)}</pre>
);

ViewCourseDeveloper.propTypes = {
  record: PropTypes.object.isRequired,
};

export default ViewCourseDeveloper;
