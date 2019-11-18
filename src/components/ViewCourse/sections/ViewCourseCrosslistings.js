import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Card, Col, Row, KeyValue } from '@folio/stripes/components';

const ViewCourseData = ({ record }) => {
  const courseListingObject = record.courseListingObject || {};

  return (
    <Card headerStart="Cross-listed course">
      <Row>
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
