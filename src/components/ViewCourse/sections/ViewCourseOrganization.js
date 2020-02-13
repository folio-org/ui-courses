import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import get from 'lodash/get';
import { Card, Col, Row, KeyValue } from '@folio/stripes/components';

const ViewCourseOrganization = ({ record }) => {
  const clo = record.courseListingObject || {};
  const location = get(clo, 'locationObject.name', clo.locationId);

  return (
    <Card headerStart="Organization">
      <Row>
        <Col xs={12}>
          <KeyValue label={<FormattedMessage id="ui-courses.field.location" />} value={location} />
        </Col>
      </Row>
    </Card>
  );
};

ViewCourseOrganization.propTypes = {
  record: PropTypes.object.isRequired,
};

export default ViewCourseOrganization;
