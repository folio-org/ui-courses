import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, FormattedDate } from 'react-intl';
import { Card, Col, Row, KeyValue } from '@folio/stripes/components';

const ViewCourseTerm = ({ record }) => {
  const termObject = record?.courseListingObject?.termObject || { name: '' };

  return (
    <Card headerStart={termObject.name}>
      <Row>
        <Col xs={6}>
          <KeyValue
            label={<FormattedMessage id="ui-courses.field.startDate" />}
            value={<FormattedDate value={termObject.startDate} />}
          />
        </Col>
        <Col xs={6}>
          <KeyValue
            label={<FormattedMessage id="ui-courses.field.endDate" />}
            value={<FormattedDate value={termObject.endDate} />}
          />
        </Col>
      </Row>
    </Card>
  );
};

ViewCourseTerm.propTypes = {
  record: PropTypes.object.isRequired,
};

export default ViewCourseTerm;
