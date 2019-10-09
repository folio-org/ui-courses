import React from 'react';
import Links from './Links';

export default (props) => (
  <div>
    <p>This is the list of courses</p>
    <Links />
    {props.children}
  </div>
);
