import React from 'react';
import PropTypes from 'prop-types';

const ViewCourse = (props) => (
  <p>This is the single course {props.match.params.id}</p>
);

ViewCourse.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ViewCourse;
