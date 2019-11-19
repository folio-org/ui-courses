import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Card, Col, Row, KeyValue } from '@folio/stripes/components';

const ViewCourseOrganization = ({ record }) => {
  const courseListingObject = record.courseListingObject || {};

  return (
    <Card headerStart="Organization">
      <Row>
        <Col xs={6}>
          <KeyValue label={<FormattedMessage id="ui-courses.field.location" />} value={courseListingObject.locationId} />
        </Col>
        <Col xs={6}>
          <KeyValue label={<FormattedMessage id="ui-courses.field.serviceDesk" />} value={courseListingObject.servicepointId} />
        </Col>
      </Row>
    </Card>
  );
};

ViewCourseOrganization.propTypes = {
  record: PropTypes.object.isRequired,
};

export default ViewCourseOrganization;
