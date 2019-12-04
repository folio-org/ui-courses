import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import get from 'lodash/get';
import { Card, Col, Row, KeyValue } from '@folio/stripes/components';

const ViewCourseInstructors = ({ record }) => {
  const courseListingObject = record.courseListingObject || {};
  const instructorObjects = courseListingObject.instructorObjects || [];

  return (
    <React.Fragment>
      {
        instructorObjects.map((instructor, index) => (
          <Card key={index} headerStart={`Instructor #${index + 1}`}>
            <Row>
              <Col xs={4}>
                <KeyValue label={<FormattedMessage id="ui-courses.field.name" />} value={instructor.name} />
              </Col>
              <Col xs={4}>
                <KeyValue label={<FormattedMessage id="ui-courses.field.barcode" />} value={instructor.barcode} />
              </Col>
              <Col xs={4}>
                <KeyValue label={<FormattedMessage id="ui-courses.field.patronGroup" />} value={get(instructor, 'patronGroupObject.group')} />
              </Col>
            </Row>
          </Card>
        ))
      }
    </React.Fragment>
  );
};

ViewCourseInstructors.propTypes = {
  record: PropTypes.object.isRequired,
};

export default ViewCourseInstructors;
