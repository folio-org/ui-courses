import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Card, Col, Row, KeyValue, Tooltip } from '@folio/stripes/components';

const ViewCourseData = ({ record }) => {
  const departmentObject = record.departmentObject || {};
  const courseListingObject = record.courseListingObject || {};
  const courseType = (courseListingObject.courseTypeObject || {}).name;

  const courseNameAndDescription = (
    <Tooltip text={record.description}>
      {({ ref, ariaIds }) => (
        <span ref={ref} aria-labelledby={ariaIds.text}>
          {record.name}
        </span>
      )}
    </Tooltip>
  );

  const departmentNameAndDescription = (
    <Tooltip text={departmentObject.description}>
      {({ ref, ariaIds }) => (
        <span ref={ref} aria-labelledby={ariaIds.text}>
          {departmentObject.name}
        </span>
      )}
    </Tooltip>
  );

  return (
    <Card headerStart="Course">
      <Row>
        <Col xs={3}>
          <KeyValue label={<FormattedMessage id="ui-courses.field.name" />} value={courseNameAndDescription} />
        </Col>
        <Col xs={3}>
          <KeyValue label={<FormattedMessage id="ui-courses.field.department" />} value={departmentNameAndDescription} />
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
          <KeyValue label={<FormattedMessage id="ui-courses.field.courseType" />} value={courseType} />
        </Col>
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
