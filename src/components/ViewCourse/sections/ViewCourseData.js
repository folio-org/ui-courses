import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Card, Col, Row, KeyValue } from '@folio/stripes/components';

const ViewCourseData = ({ record }) => {
  const departmentObject = record.departmentObject || {};
  const courseListingObject = record.courseListingObject || {};

  return (
    <Card headerStart="Course">
      <Row>
        <Col xs={3}>
          <KeyValue label={<FormattedMessage id="ui-courses.field.name" />} value={record.name} />
        </Col>
        <Col xs={3}>
          <KeyValue label={<FormattedMessage id="ui-courses.field.department" />} value={departmentObject.name} />
        </Col>
        <Col xs={3}>
          <KeyValue label={<FormattedMessage id="ui-courses.field.number" />} value={record.courseNumber} />
        </Col>
        <Col xs={3}>
          <KeyValue label={<FormattedMessage id="ui-courses.field.section" />} value={record.sectionName} />
        </Col>
      </Row>
      <Row>
        <Col xs={3}>
          <KeyValue label={<FormattedMessage id="ui-courses.field.registrarId" />} value={courseListingObject.registrarId} />
        </Col>
        <Col xs={3}>
          <KeyValue label={<FormattedMessage id="ui-courses.field.externalId" />} value={courseListingObject.externalId} />
        </Col>
      </Row>
    </Card>
  );
};

ViewCourseData.propTypes = {
  record: PropTypes.object.isRequired,
};

export default ViewCourseData;
