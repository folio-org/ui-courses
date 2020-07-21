import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import get from 'lodash/get';
import { withStripes, CalloutContext } from '@folio/stripes/core';
import { Card, Button } from '@folio/stripes/components';
import withOkapiKy from '../../../util/withOkapiKy';
import css from './Instructors.css';


const ViewCourseInstructors = (props) => {
  const callout = useContext(CalloutContext);
  function removeInstructor(instructorId) {
    const oldCount = props.record.courseListingObject.instructorObjects.length;
    const clid = props.record.courseListingId;
    props.okapiKy(`coursereserves/courselistings/${clid}/instructors/${instructorId}`, {
      method: 'DELETE',
      headers: { Accept: 'text/plain' },
    })
      .text()
      .then(() => { props.mutator.instructorCount.replace(oldCount - 1); })
      .catch(exception => callout.sendCallout({
        type: 'error',
        message: <FormattedMessage id="ui-courses.removeInstructor.failure" values={{ message: exception }} />,
      }));
  }

  const { record, stripes } = props;
  const courseListingObject = record.courseListingObject || {};
  const instructorObjects = (courseListingObject.instructorObjects || []).sort((a, b) => (
    a.name < b.name ? -1 : a.name > b.name ? 1 : 0
  ));
  const permissions = {
    add: stripes.hasPerm('course-reserves-storage.courselistings.instructors.item.post'),
    edit: stripes.hasPerm('course-reserves-storage.courselistings.instructors.item.put'),
    delete: stripes.hasPerm('course-reserves-storage.courselistings.instructors.item.delete'),
  };

  const n = instructorObjects.length;

  return (
    <Card headerStart={<FormattedMessage id="ui-courses.instructor.pluralized" values={{ count: n }} />}>
      {
        n > 0 &&
          <table className={css.instructors}>
            <thead>
              <tr>
                {
                  ['instructorName', 'barcode', 'patronGroup'].map(name => (
                    <FormattedMessage key={name} id={`ui-courses.field.${name}`}>
                      {label => <th align="left" aria-label={label}>{label}</th>}
                    </FormattedMessage>
                  ))
                }
              </tr>
            </thead>
            <tbody>
              {
                instructorObjects.map((instructor, index) => (
                  <tr key={index}>
                    <td>{instructor.name}</td>
                    <td>{instructor.barcode}</td>
                    <td>{get(instructor, 'patronGroupObject.group')}</td>
                    <td>
                      {
                        permissions.edit && !instructor.patronGroupObject && (
                          <FormattedMessage id="ui-courses.editInstructor">
                            {ariaLabel => (
                              <Button
                                aria-label={ariaLabel}
                                buttonStyle="primary"
                                id={`clickable-edit-instructor-${index}`}
                                marginBottom0
                                to={`/cr/instructors/${courseListingObject.id}/${record.id}/${instructor.id}/edit`}
                              >
                                <FormattedMessage id="ui-courses.button.editInstructor" />
                              </Button>
                            )}
                          </FormattedMessage>
                        )
                      }
                      {
                        permissions.delete && (
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
                        )
                      }
                    </td>
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
