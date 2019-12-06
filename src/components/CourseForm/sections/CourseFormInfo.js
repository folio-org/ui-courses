import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Field } from 'react-final-form';
import { required } from '@folio/stripes-util';
import { Col, Row, Select, TextField, TextArea } from '@folio/stripes/components';

export default class CourseFormInfo extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      statusValues: PropTypes.array,
      typeValues: PropTypes.array,
    }),
    id: PropTypes.string,
  };

  validateEndDate = (value, allValues) => {
    if (value && allValues.startDate && (allValues.openEnded !== true)) {
      const startDate = new Date(allValues.startDate);
      const endDate = new Date(allValues.endDate);

      if (startDate >= endDate) {
        return (
          <div data-test-error-end-date-too-early>
            <FormattedMessage id="ui-courses.errors.endDateGreaterThanStartDate" />
          </div>
        );
      }
    }
    return undefined;
  }

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
          <Col xs={6}>
            <Field
              component={TextField}
              id="edit-course-section"
              label={<FormattedMessage id="ui-courses.field.section" />}
              maxLength={255}
              name="sectionName"
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
