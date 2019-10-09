import React from 'react';
import PropTypes from 'prop-types';
import Links from './Links';

const Reserves = (props) => (
  <div>
    <p>This is the list of reserves</p>
    <Links />
    {props.children}
  </div>
);

Reserves.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Reserves;
