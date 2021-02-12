import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import get from 'lodash/get';
import { Card, Col, Row, KeyValue, Tooltip } from '@folio/stripes/components';
import { ViewMetaData } from '@folio/stripes/smart-components';

const ViewCourseData = ({ record }) => {
  const departmentObject = record.departmentObject || {};
  const courseListingObject = record.courseListingObject || {};
  const courseType = (courseListingObject.courseTypeObject || {}).name;
  const location = get(courseListingObject, 'locationObject.name', courseListingObject.locationId);

  const courseNameAndDescription = (
    <Tooltip id="courseNameAndDescription" text={record.description || ''}>
      {({ ref, ariaIds }) => (
        <span ref={ref} aria-labelledby={ariaIds.text}>
          {record.name}
        </span>
      )}
    </Tooltip>
  );

  const departmentNameAndDescription = (
    <Tooltip id="courseNameAndDescription" text={departmentObject.description || ''}>
      {({ ref, ariaIds }) => (
        <span ref={ref} aria-labelledby={ariaIds.text}>
          {departmentObject.name}
        </span>
      )}
    </Tooltip>
  );

  return (
    <>
      <ViewMetaData metadata={record.metadata} />
      <Card headerStart={record.name || ''}>
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
          <Col xs={12}>
            <KeyValue label={<FormattedMessage id="ui-courses.field.description" />} value={record.description} />
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
          <Col xs={3}>
            <KeyValue label={<FormattedMessage id="ui-courses.field.location" />} value={location} />
          </Col>
        </Row>
      </Card>
    </>
  );
};

ViewCourseData.propTypes = {
  record: PropTypes.object.isRequired,
};

export default ViewCourseData;
