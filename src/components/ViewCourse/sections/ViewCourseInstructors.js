import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import get from 'lodash/get';
import { withStripes } from '@folio/stripes/core';
import { Card, Button } from '@folio/stripes/components';
import css from './Instructors.css';


const ViewCourseInstructors = ({ record, stripes }) => {
  const courseListingObject = record.courseListingObject || {};
  const instructorObjects = courseListingObject.instructorObjects || [];
  const permissions = {
    add: stripes.hasPerm('course-reserves-storage.courselistings.reserves.item.post'),
    edit: stripes.hasPerm('course-reserves-storage.courselistings.instructors.item.put'),
    delete: stripes.hasPerm('course-reserves-storage.courselistings.instructors.item.delete'),
  };

  const n = instructorObjects.length;

  return (
    <Card headerStart={n ? `${n} Instructors` : 'No instructors'}>
      {n > 0 &&
        <table className={css.instructors}>
          <thead>
            <tr>
              <th align="left"><FormattedMessage id="ui-courses.field.instructorName" /></th>
              <th align="left"><FormattedMessage id="ui-courses.field.barcode" /></th>
              <th align="left"><FormattedMessage id="ui-courses.field.patronGroup" /></th>
            </tr>
          </thead>
          <tbody>
            {
              instructorObjects.map((instructor, index) => (
                <tr key={index}>
                  <td>{instructor.name}</td>
                  <td>{instructor.barcode}</td>
                  <td>{instructor.patronGroup || get(instructor, 'patronGroupObject.group')}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      }
      {permissions.add && (
        <FormattedMessage id="ui-courses.addInstructor">
          {ariaLabel => (
            <Button
              aria-label={ariaLabel}
              buttonStyle="primary"
              id="clickable-add-instructor"
              to={`/cr/instructors/${courseListingObject.id}/${record.id}/add`}
              marginBottom0
            >
              <FormattedMessage id="ui-courses.button.addInstructor" />
            </Button>
          )}
        </FormattedMessage>
      )}
    </Card>
  );
};

ViewCourseInstructors.propTypes = {
  record: PropTypes.object.isRequired,
  stripes: PropTypes.shape({
    hasPerm: PropTypes.func.isRequired,
  }).isRequired,
};

export default withStripes(ViewCourseInstructors);
