import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import get from 'lodash/get';
import { Card } from '@folio/stripes/components';

const ViewCourseInstructors = ({ record }) => {
  const courseListingObject = record.courseListingObject || {};
  const instructorObjects = courseListingObject.instructorObjects || [];

  return (
    <Card headerStart="Instructors">
      <table>
        <thead>
          <tr>
            <th align="left">#</th>
            <th align="left"><FormattedMessage id="ui-courses.field.instructorName" /></th>
            <th align="left"><FormattedMessage id="ui-courses.field.barcode" /></th>
            <th align="left"><FormattedMessage id="ui-courses.field.patronGroup" /></th>
          </tr>
        </thead>
        <tbody>
          {
            instructorObjects.map((instructor, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{instructor.name}</td>
                <td>{instructor.barcode}</td>
                <td>{get(instructor, 'patronGroupObject.group')}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </Card>
  );
};

ViewCourseInstructors.propTypes = {
  record: PropTypes.object.isRequired,
};

export default ViewCourseInstructors;
