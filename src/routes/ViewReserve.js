import React from 'react';
import PropTypes from 'prop-types';

const ViewReserve = (props) => (
  <p>This is the single reserve {props.match.params.id}</p>
);

ViewReserve.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ViewReserve;
