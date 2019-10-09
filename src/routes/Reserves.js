import React from 'react';
import Links from './Links';

export default (props) => (
  <div>
    <p>This is the list of reserves</p>
    <Links />
    {props.children}
  </div>
);
