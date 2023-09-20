import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Field } from 'react-final-form';
import { required } from '@folio/stripes/util';
import { Col, Row, Select, TextField, TextArea } from '@folio/stripes/components';

export default class CourseFormInfo extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      departments: PropTypes.arrayOf(
        PropTypes.shape({
          value: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
        }),
      ),
    }),
    id: PropTypes.string,
  };

  render() {
    const { data, id } = this.props;

    return (
      <div data-test-course-info id={id}>
        <Row>
          <Col xs={6}>
            <Field
              component={TextField}
              id="edit-course-name"
              label={<FormattedMessage id="ui-courses.field.name" />}
              maxLength={255}
              name="name"
              required
              validate={required}
            />
          </Col>
          <Col xs={6}>
            <Field
              component={Select}
              dataOptions={data.departments}
              id="edit-course-department"
              label={<FormattedMessage id="ui-courses.field.department" />}
              name="departmentId"
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
          <Col xs={6}>
            <Field
              component={TextField}
              id="edit-course-number"
              label={<FormattedMessage id="ui-courses.field.number" />}
              maxLength={255}
              name="courseNumber"
            />
          </Col>
          <Col xs={4}>
            <Field
              component={TextField}
              id="edit-course-section"
              label={<FormattedMessage id="ui-courses.field.section" />}
              maxLength={255}
              name="sectionName"
            />
          </Col>
          <Col xs={2}>
            <Field
              component={TextField}
              id="edit-course-number-of-students"
              label={<FormattedMessage id="ui-courses.field.numberOfStudents" />}
              name="numberOfStudents"
              parse={value => {
                if (!value) return undefined;

                // We can't _always_ parse this because the parsed value is the one that gets
                // checked in our `validate` callback. If we always parsed it, then it'd /already/
                // be coalesced into an integer if the user entered a float. So if it is a float
                // we leave it, knowing that it'll fail validation.
                if (parseInt(value, 10) !== parseFloat(value)) {
                  return value;
                }

                return parseInt(value, 10);
              }}
              type="number"
              validate={value => {
                if (value && (parseInt(value, 10) !== parseFloat(value))) {
                  return <FormattedMessage id="ui-courses.errors.mustBeInteger" />;
                }

                return undefined;
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Field
              component={TextArea}
              id="edit-course-description"
              label={<FormattedMessage id="ui-courses.field.description" />}
              name="description"
              parse={v => v} // Lets us pass an empty string instead of `undefined`
            />
          </Col>
        </Row>
      </div>
    );
  }
}
