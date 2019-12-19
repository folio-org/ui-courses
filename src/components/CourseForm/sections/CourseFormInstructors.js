import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from '@folio/stripes/components';

export default class CourseFormInfo extends React.Component {
  static propTypes = {
    id: PropTypes.string,
  };

  render() {
    const { id } = this.props;

    return (
      <div data-test-course-instructors id={id}>
        <Row>
          <Col xs={12}>
            (Not yet implemented)
          </Col>
        </Row>
      </div>
    );
  }
}
