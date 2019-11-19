import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Card, Col, Row, KeyValue } from '@folio/stripes/components';

const ViewCourseData = ({ crossListed }) => {
  return (
    <React.Fragment>
      {
        crossListed.map((record, index) => (
          <Card key={index} headerStart={`Cross listed course #${index + 1}`}>
            <Row>
              <Col xs={3}>
                <KeyValue label={<FormattedMessage id="ui-courses.field.name" />} value={record.name} />
              </Col>
              <Col xs={3}>
                <KeyValue label={<FormattedMessage id="ui-courses.field.department" />} value={(record.departmentObject || {}).name} />
              </Col>
              <Col xs={3}>
                <KeyValue label={<FormattedMessage id="ui-courses.field.number" />} value={record.courseNumber} />
              </Col>
              <Col xs={3}>
                <KeyValue label={<FormattedMessage id="ui-courses.field.section" />} value={record.sectionName} />
              </Col>
            </Row>
          </Card>
        ))
      }
    </React.Fragment>
  );
};

ViewCourseData.propTypes = {
  crossListed: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};

export default ViewCourseData;
