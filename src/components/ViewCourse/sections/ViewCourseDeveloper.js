import React from 'react';
import PropTypes from 'prop-types';

const ViewCourseDeveloper = ({ record }) => (
  <React.Fragment>
    <h1>Developer information</h1>
    <pre>{JSON.stringify(record, null, 2)}</pre>
  </React.Fragment>
);

ViewCourseDeveloper.propTypes = {
  record: PropTypes.object.isRequired,
};

export default ViewCourseDeveloper;
