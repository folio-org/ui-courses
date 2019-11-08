import React from 'react';
import PropTypes from 'prop-types';

const ReserveRoute = (props) => (
  <p>This is the single reserve {props.match.params.id}</p>
);

ReserveRoute.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ReserveRoute;
