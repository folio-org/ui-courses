import React from 'react';
import PropTypes from 'prop-types';
import Links from './Links';

const SearchCourses = (props) => {
  return (
    <div>
      <p>This is the list of courses</p>
      <Links />
      {props.children}
    </div>
  );
};

SearchCourses.propTypes = {
  children: PropTypes.object.isRequired,
};

export default SearchCourses;
