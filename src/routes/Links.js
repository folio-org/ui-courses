import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <ul>
    <li><Link to="/courses/courses">courses</Link></li>
    <li><Link to="/courses/courses/123">single course</Link></li>
    <li><Link to="/courses/reserves">reserves</Link></li>
    <li><Link to="/courses/reserves/456">single reserve</Link></li>
  </ul>
);
