import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { Card } from '@folio/stripes/components';


const ReserveFormCourses = (props) => {
  const { data } = props;
  const courses = data.crossListed || [];

  return (
    <Card headerStart={<FormattedMessage id="ui-courses.headings.reserveCourses" />}>
      <ul>
        {
          courses.map((course, i) => (
            <li key={i}>
              <Link to={`/cr/courses/${course.id}`}>
                {course.courseNumber}
                :&nbsp;
                {course.name}
                {!course.departmentObject ? '' : ` (${course.departmentObject.name})`}
              </Link>
            </li>
          ))
        }
      </ul>
    </Card>
  );
};


ReserveFormCourses.propTypes = {
  data: PropTypes.shape({
    crossListed: PropTypes.array,
  }).isRequired,
};


export default ReserveFormCourses;
