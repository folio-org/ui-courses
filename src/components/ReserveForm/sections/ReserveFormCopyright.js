import React from 'react';
import PropTypes from 'prop-types';
// import get from 'lodash/get';
import { FormattedMessage } from 'react-intl';
import { Field } from 'react-final-form';
import { Card, Col, Row, TextField, Select, Checkbox } from '@folio/stripes/components';


const ReserveFormCopyright = (props) => {
  const { data } = props;

  return (
    <Card headerStart={<FormattedMessage id="ui-courses.headings.copyrightInformation" />}>
      {/*
      <Row>
        <Col xs={12}>
          <Field
            id="edit-reserve-copyright-tracking"
            name="copyrightTracking."
            component={TextField}
            label={<FormattedMessage id="ui-courses.field.copyrightTrackingNeeded" />}
          />
        </Col>
      </Row>
      */}
      <Row>
        <Col xs={6}>
          <Field
            id="edit-reserve-copyright-additional"
            name="copyrightTracking.additionalSectionsUsed"
            component={Checkbox}
            type="checkbox"
            label={<FormattedMessage id="ui-courses.field.additionalSectionsUsed" />}
          />
        </Col>
        <Col xs={6}>
          <Field
            id="edit-reserve-copyright-status"
            name="copyrightTracking.copyrightStatusId"
            component={Select}
            dataOptions={data.copyrightStatuses}
            label={<FormattedMessage id="ui-courses.field.copyrightStatusId" />}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={3}>
          <Field
            id="edit-reserve-copyright-total-pages"
            name="copyrightTracking.totalPagesInItem"
            component={TextField}
            label={<FormattedMessage id="ui-courses.field.totalPagesInItem" />}
          />
        </Col>
        <Col xs={3}>
          <Field
            id="edit-reserve-copyright-pages-used"
            name="copyrightTracking.totalPagesUsed"
            component={TextField}
            label={<FormattedMessage id="ui-courses.field.totalPagesUsed" />}
          />
        </Col>
        <Col xs={3}>
          <Field
            id="edit-reserve-copyright-percentage-used"
            name="copyrightTracking.percentOfPages"
            component={TextField}
            label={<FormattedMessage id="ui-courses.field.percentOfPages" />}
          />
        </Col>
        <Col xs={3}>
          <Field
            id="edit-reserve-copyright-payment-basis"
            name="copyrightTracking.paymentBasis"
            component={TextField}
            label={<FormattedMessage id="ui-courses.field.paymentBasis" />}
          />
        </Col>
      </Row>
    </Card>
  );
};


ReserveFormCopyright.propTypes = {
  values: PropTypes.shape({
    copyrightTracking: PropTypes.shape({
      copyrightStatusId: PropTypes.string,
    }),
  }).isRequired,
  data: PropTypes.shape({
    copyrightStatuses: PropTypes.array.isRequired,
  }).isRequired,
};


export default ReserveFormCopyright;
