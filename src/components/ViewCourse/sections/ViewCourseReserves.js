import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { Card, Col, Row } from '@folio/stripes/components';
import VCKeyValue from './VCKeyValue';

const ViewCourseReserves = ({ course, reserves, items }) => {
  const itemMap = {};
  items.forEach(item => { itemMap[item.id] = item; });

  return (
    <React.Fragment>
      {
        reserves.map((record, index) => {
          const copiedItem = record.copiedItem || {};
          const contributors = (copiedItem.contributors || []).map(x => x.name).join(', ');
          const courseListingObject = course.courseListingObject || {};
          const termObject = courseListingObject.termObject || {};
          const item = itemMap[record.itemId];

          return (
            <Card key={index} headerStart={<span>Item title: <i>{copiedItem.title}</i></span>}>
              <Row>
                <Col xs={3}>
                  <VCKeyValue id="itemBarcode" value={copiedItem.barcode} />
                </Col>
                <Col xs={3}>
                  <VCKeyValue id="contributor" value={contributors} />
                </Col>
                <Col xs={3}>
                  <VCKeyValue id="permanentLocation" value={copiedItem.permanentLocation} />
                </Col>
                <Col xs={3}>
                  <VCKeyValue id="callNumber" value={copiedItem.callNumber} />
                </Col>
              </Row>
              <Row>
                <Col xs={3}>
                  <VCKeyValue id="volume" value={copiedItem.volume} />
                </Col>
                <Col xs={3}>
                  <VCKeyValue id="copy" value={copiedItem.copy} />
                  {/* XXX There is no such field in the "reserve.json" schema */}
                </Col>
                <Col xs={3}>
                  <VCKeyValue id="enumeration" value={copiedItem.enumeration} />
                  {/* XXX There is no such field in the "reserve.json" schema */}
                </Col>
                <Col xs={3}>
                  <VCKeyValue id="status" value={get(item, 'status.name')} />
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
                  <VCKeyValue id="urlLink" value={copiedItem.url} />
                  {/* XXX There is no such field in the "reserve.json" schema */}
                </Col>
              </Row>
              <Row>
                <Col xs={3}>
                  <VCKeyValue id="startDate" value={record.startDate || termObject.startDate} />
                </Col>
                <Col xs={3}>
                  <VCKeyValue id="endDate" value={record.endDate || termObject.endDate} />
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
  course: PropTypes.object.isRequired,
  reserves: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
  items: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};

export default ViewCourseReserves;
