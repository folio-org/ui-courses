import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Field } from 'react-final-form';
import { Col, Row, Select, TextField, MessageBanner } from '@folio/stripes/components';

const optionsShape = PropTypes.arrayOf(
  PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })
);

export default class CourseFormListing extends React.Component {
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
        <MessageBanner type="warning" dismissable>
          Warning: changes made in this section will also affect all cross-listed courses.
        </MessageBanner>
        <Row>
          <Col xs={4}>
            <Field
              component={Select}
              dataOptions={data.coursetypes}
              id="edit-course-type"
              label={<FormattedMessage id="ui-courses.field.courseType" />}
              name="courseListingObject.courseTypeId"
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
              validate={value => {
                if (!value || value === '1') {
                  // I have no idea why <Select> defaults to value "1" when given an empty list, but it does
                  return <FormattedMessage id="stripes-core.label.missingRequiredField" />;
                }

                return undefined;
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Field
              component={Select}
              dataOptions={data.locations}
              id="edit-course-location"
              label={<FormattedMessage id="ui-courses.field.location" />}
              name="courseListingObject.locationId"
            />
          </Col>
        </Row>
      </div>
    );
  }
}
