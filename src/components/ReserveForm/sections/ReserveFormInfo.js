import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Field } from 'react-final-form';
import { Col, Row, Select, Datepicker } from '@folio/stripes/components';

const ReserveFormInfo = (props) => {
  const { data } = props;

  return (
    <div data-test-reserve-info id="courseFormInfo">
      <Row>
        <Col xs={4}>
          <Field
            component={Select}
            dataOptions={data.locations}
            id="edit-reserve-temporary-location"
            label={<FormattedMessage id="ui-courses.field.temporaryLocation" />}
            name="copiedItem.temporaryLocationId"
          />
        </Col>
        <Col xs={4}>
          <Field
            component={Select}
            dataOptions={data.loanTypes}
            id="edit-reserve-temporary-loan-type"
            label={<FormattedMessage id="ui-courses.field.temporaryLoanType" />}
            name="temporaryLoanTypeId"
          />
        </Col>
        <Col xs={4}>
          <Field
            component={Select}
            dataOptions={data.processingStatuses}
            id="edit-reserve-processing-status"
            label={<FormattedMessage id="ui-courses.field.processingStatus" />}
            name="processingStatusId"
          />
        </Col>
      </Row>
      <Row>
        <Col xs={4}>
          <FormattedMessage id="ui-courses.headings.startDate">
            {placeholder => (
              <Field
                id="edit-reserve-start-date"
                name="startDate"
                dateFormat="YYYY-MM-DD"
                backendDateStandard="YYYY-MM-DD"
                label={placeholder}
                component={Datepicker}
                usePortal
              />
            )}
          </FormattedMessage>
        </Col>
        <Col xs={4}>
          <FormattedMessage id="ui-courses.headings.endDate">
            {placeholder => (
              <Field
                id="edit-reserve-end-date"
                name="endDate"
                dateFormat="YYYY-MM-DD"
                backendDateStandard="YYYY-MM-DD"
                label={placeholder}
                component={Datepicker}
                usePortal
              />
            )}
          </FormattedMessage>
        </Col>
      </Row>
    </div>
  );
};


ReserveFormInfo.propTypes = {
  data: PropTypes.shape({
    locations: PropTypes.array.isRequired,
    loanTypes: PropTypes.array.isRequired,
    processingStatuses: PropTypes.array.isRequired,
  }).isRequired,
};

export default ReserveFormInfo;
