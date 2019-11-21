import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Card, Col, Row, KeyValue } from '@folio/stripes/components';

const ViewCourseReserves = ({ reserves }) => {
  return (
    <React.Fragment>
      {
        reserves.map((record, index) => {
          const copiedItem = record.copiedItem || {};
          const contributors = (copiedItem.contributors || []).map(x => x.name).join(', ');

          return (
            <Card key={index} headerStart={<span>Item title: <i>{copiedItem.title}</i></span>}>
              <Row>
                <Col xs={2}>
                  <KeyValue label={<FormattedMessage id="ui-courses.field.itemBarcode" />} value={copiedItem.barcode} />
                </Col>
                <Col xs={2}>
                  <KeyValue label={<FormattedMessage id="ui-courses.field.contributor" />} value={contributors} />
                </Col>
                <Col xs={2}>
                  <KeyValue label={<FormattedMessage id="ui-courses.field.permanentLocation" />} value={copiedItem.permanentLocation} />
                </Col>
                <Col xs={2}>
                  <KeyValue label={<FormattedMessage id="ui-courses.field.callNumber" />} value={copiedItem.callNumber} />
                </Col>
                <Col xs={1}>
                  <KeyValue label={<FormattedMessage id="ui-courses.field.volume" />} value={copiedItem.volume} />
                </Col>
                <Col xs={1}>
                  <KeyValue label={<FormattedMessage id="ui-courses.field.copy" />} value={copiedItem.copy} />
                  {/* XXX There is no such field in the "reserve.json" schema */}
                </Col>
                <Col xs={1}>
                  <KeyValue label={<FormattedMessage id="ui-courses.field.enumeration" />} value={copiedItem.enumeration} />
                  {/* XXX There is no such field in the "reserve.json" schema */}
                </Col>
                <Col xs={1}>
                  <KeyValue label={<FormattedMessage id="ui-courses.field.status" />} value="XXX" />
                  {/* XXX This needs to be fetched live */}
                </Col>
              </Row>
              <Row>
                <Col xs={3}>
                  <KeyValue label={<FormattedMessage id="ui-courses.field.temporaryLocation" />} value={copiedItem.temporaryLocationId} />
                </Col>
                <Col xs={3}>
                  <KeyValue label={<FormattedMessage id="ui-courses.field.temporaryLoanType" />} value={record.temporaryLoanTypeId} />
                </Col>
                <Col xs={3}>
                  <KeyValue label={<FormattedMessage id="ui-courses.field.processingStatus" />} value={record.processingStatusId} />
                </Col>
                <Col xs={3}>
                  <KeyValue label={<FormattedMessage id="ui-courses.field.urlLink" />} value={copiedItem.XXX} />
                  {/* XXX There is no such field in the "reserve.json" schema */}
                </Col>
              </Row>
              <Row>
                <Col xs={3}>
                  <KeyValue label={<FormattedMessage id="ui-courses.field.startDate" />} value={record.startDate} />
                  {/* XXX Should default to startDate of the course's term */}
                </Col>
                <Col xs={3}>
                  <KeyValue label={<FormattedMessage id="ui-courses.field.endDate" />} value={record.endDate} />
                  {/* XXX Should default to endDate of the course's term */}
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  This item requires copyright tracking:
                  XXX checkbox
                </Col>
              </Row>
            </Card>
          );
        })
      }
    </React.Fragment>
  );
};

ViewCourseReserves.propTypes = {
  reserves: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};

export default ViewCourseReserves;
