import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Field } from 'react-final-form';
import { Col, Row, Select, TextField } from '@folio/stripes/components';

const optionsShape = PropTypes.arrayOf(
  PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })
);

export default class CourseFormInfo extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      coursetypes: optionsShape,
      terms: optionsShape,
      locations: optionsShape,
      servicepoints: optionsShape,
    }),
    id: PropTypes.string,
  };

  render() {
    const { data, id } = this.props;

    // Fields:
    // courseTypeId, registrarId, externalId,
    // termId,
    // locationId, servicepointId
    return (
      <div data-test-course-info id={id}>
        <p>
          <b style={{ color: 'red' }}>Caution!</b>
          &nbsp;
          Changes made in this section will also affect all cross-listed courses.
        </p>
        <Row>
          <Col xs={4}>
            <Field
              component={Select}
              dataOptions={data.coursetypes}
              id="edit-course-type"
              label={<FormattedMessage id="ui-courses.field.courseType" />}
              name="courseListingObject.courseTypeId"
              required
            />
          </Col>
          <Col xs={4}>
            <Field
              component={TextField}
              id="edit-course-registrar"
              label={<FormattedMessage id="ui-courses.field.registrarId" />}
              maxLength={255}
              name="courseListingObject.registrarId"
            />
          </Col>
          <Col xs={4}>
            <Field
              component={TextField}
              id="edit-course-external"
              label={<FormattedMessage id="ui-courses.field.externalId" />}
              maxLength={255}
              name="courseListingObject.externalId"
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Field
              component={Select}
              dataOptions={data.terms}
              id="edit-course-term"
              label={<FormattedMessage id="ui-courses.field.term" />}
              name="courseListingObject.termId"
              required
            />
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <Field
              component={Select}
              dataOptions={data.locations}
              id="edit-course-location"
              label={<FormattedMessage id="ui-courses.field.location" />}
              name="courseListingObject.locationId"
              required
            />
          </Col>
          <Col xs={6}>
            <Field
              component={Select}
              dataOptions={data.servicepoints}
              id="edit-course-servicepoint"
              label={<FormattedMessage id="ui-courses.field.serviceDesk" />}
              name="courseListingObject.servicepointId"
              required
            />
          </Col>
        </Row>
      </div>
    );
  }
}
