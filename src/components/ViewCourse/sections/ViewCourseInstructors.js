import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import get from 'lodash/get';
import { withStripes } from '@folio/stripes/core';
import { Card, Button } from '@folio/stripes/components';
import withOkapiKy from '../../../util/withOkapiKy';
import css from './Instructors.css';


const ViewCourseInstructors = (props) => {
  function removeInstructor(instructorId) {
    console.log(`removeInstructor(${instructorId}): props =`, props);
    const oldCount = props.record.courseListingObject.instructorObjects.length;
    const clid = props.record.courseListingId;
    props.okapiKy(`coursereserves/courselistings/${clid}/instructors/${instructorId}`, {
      method: 'DELETE',
      headers: { Accept: 'text/plain' },
    })
      .text()
      .then(() => { props.mutator.instructorCount.replace(oldCount - 1); })
      .catch(exception => console.log('failed:', exception));
  }

  const { record, stripes } = props;
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
                  {
                    permissions.delete && (
                      <td>
                        <FormattedMessage id="ui-courses.removeInstructor">
                          {ariaLabel => (
                            <Button
                              aria-label={ariaLabel}
                              buttonStyle="primary"
                              id={`clickable-remove-instructor-${index}`}
                              marginBottom0
                              onClick={() => removeInstructor(instructor.id)}
                            >
                              <FormattedMessage id="ui-courses.button.removeInstructor" />
                            </Button>
                          )}
                        </FormattedMessage>
                      </td>
                    )
                  }
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
  mutator: PropTypes.shape({
    instructorCount: PropTypes.shape({
      replace: PropTypes.func.isRequired,
    }).isRequired,
  }).isRequired,
  okapiKy: PropTypes.func.isRequired,
};

export default withOkapiKy(withStripes(ViewCourseInstructors));
