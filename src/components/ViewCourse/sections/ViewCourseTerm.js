import React from 'react';
import PropTypes from 'prop-types';
// We use intl.formatDate instead of <FormattedDate> as there is no way to specify a timezone for the latter
import { useIntl, FormattedMessage } from 'react-intl';
import { Card, Col, Row, KeyValue } from '@folio/stripes/components';

const ViewCourseTerm = ({ record }) => {
  const intl = useIntl();
  const termObject = record?.courseListingObject?.termObject || { name: '' };

  return (
    <Card headerStart={termObject.name}>
      <Row>
        <Col xs={6}>
          <KeyValue
            label={<FormattedMessage id="ui-courses.field.startDate" />}
            value={intl.formatDate(termObject.startDate, { timeZone: 'UTC' })}
          />
        </Col>
        <Col xs={6}>
          <KeyValue
            label={<FormattedMessage id="ui-courses.field.endDate" />}
            value={intl.formatDate(termObject.endDate, { timeZone: 'UTC' })}
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
