import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <ul>
    <li><Link to="/cr/courses">courses</Link></li>
    <li><Link to="/cr/courses/123">single course</Link></li>
    <li><Link to="/cr/reserves">reserves</Link></li>
    <li><Link to="/cr/reserves/123/456/789">single reserve</Link></li>
  </ul>
);
