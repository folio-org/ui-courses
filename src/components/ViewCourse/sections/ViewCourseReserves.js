import React from 'react';
import PropTypes from 'prop-types';
import { Card, Col, Row } from '@folio/stripes/components';
import VCKeyValue from './VCKeyValue';

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
                  <VCKeyValue id="itemBarcode" value={copiedItem.barcode} />
                </Col>
                <Col xs={2}>
                  <VCKeyValue id="contributor" value={contributors} />
                </Col>
                <Col xs={2}>
                  <VCKeyValue id="permanentLocation" value={copiedItem.permanentLocation} />
                </Col>
                <Col xs={2}>
                  <VCKeyValue id="callNumber" value={copiedItem.callNumber} />
                </Col>
                <Col xs={1}>
                  <VCKeyValue id="volume" value={copiedItem.volume} />
                </Col>
                <Col xs={1}>
                  <VCKeyValue id="copy" value={copiedItem.copy} />
                  {/* XXX There is no such field in the "reserve.json" schema */}
                </Col>
                <Col xs={1}>
                  <VCKeyValue id="enumeration" value={copiedItem.enumeration} />
                  {/* XXX There is no such field in the "reserve.json" schema */}
                </Col>
                <Col xs={1}>
                  <VCKeyValue id="status" value="XXX" />
                  {/* XXX This needs to be fetched live */}
                </Col>
              </Row>
              <Row>
                <Col xs={3}>
                  <VCKeyValue id="temporaryLocation" value={copiedItem.temporaryLocationId} />
                </Col>
                <Col xs={3}>
                  <VCKeyValue id="temporaryLoanType" value={record.temporaryLoanTypeId} />
                </Col>
                <Col xs={3}>
                  <VCKeyValue id="processingStatus" value={record.processingStatusId} />
                </Col>
                <Col xs={3}>
                  <VCKeyValue id="urlLink" value={copiedItem.XXX} />
                  {/* XXX There is no such field in the "reserve.json" schema */}
                </Col>
              </Row>
              <Row>
                <Col xs={3}>
                  <VCKeyValue id="startDate" value={record.startDate} />
                  {/* XXX Should default to startDate of the course's term */}
                </Col>
                <Col xs={3}>
                  <VCKeyValue id="endDate" value={record.endDate} />
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
