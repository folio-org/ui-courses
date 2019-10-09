import React from 'react';
import PropTypes from 'prop-types';
import Links from './Links';

const Courses = (props) => (
  <div>
    <p>This is the list of courses</p>
    <Links />
    {props.children}
  </div>
);

Courses.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Courses;
