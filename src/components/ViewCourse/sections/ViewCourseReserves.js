import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { Card, Col, Row } from '@folio/stripes/components';
import VCKeyValue from './VCKeyValue';
import AddReserve from './AddReserve';


const CopyrightTracking = ({ data }) => {
  return (
    <Row>
      <Col xs={12}>
        {!data.copyrightStatusId ?
          'No copyright tracking required' : (
            <Card headerStart="This item requires copyright tracking:">
              <Row>
                <Col xs={6}>
                  <VCKeyValue id="additionalSectionsUsed" value={data.additionalSectionsUsed ? 'Yes' : 'No'} />
                </Col>
                <Col xs={6}>
                  <VCKeyValue id="copyrightStatusId" value={data.copyrightStatusId} />
                </Col>
              </Row>
              <Row>
                <Col xs={3}>
                  <VCKeyValue id="totalPagesInItem" value={data.totalPagesInItem} />
                </Col>
                <Col xs={3}>
                  <VCKeyValue id="totalPagesUsed" value={data.totalPagesUsed} />
                </Col>
                <Col xs={3}>
                  <VCKeyValue id="percentOfPages" value={data.percentOfPages} />
                </Col>
                <Col xs={3}>
                  <VCKeyValue id="paymentBasis" value={data.paymentBasis} />
                </Col>
              </Row>
            </Card>
          )
        }
      </Col>
    </Row>
  );
};

CopyrightTracking.propTypes = {
  data: PropTypes.object,
};


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

          // const href = `/inventory/items/view/${record.itemId}`;
          const href = `/inventory/items?qindex=item.barcode&query=${copiedItem.barcode}`;
          const linkToItem = (
            <a rel="noopener noreferrer" target="_blank" href={href}>
              Item title: <i>{copiedItem.title}</i>
            </a>
          );

          return (
            <Card key={index} headerStart={linkToItem}>
              <Row>
                <Col xs={3}>
                  <VCKeyValue id="itemBarcode" value={copiedItem.barcode} />
                </Col>
                <Col xs={3}>
                  <VCKeyValue id="contributor" value={contributors} />
                </Col>
                <Col xs={3}>
                  <VCKeyValue id="permanentLocation" value={copiedItem.permanentLocationId} />
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
                </Col>
                <Col xs={3}>
                  <VCKeyValue id="enumeration" value={copiedItem.enumeration} />
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
              <CopyrightTracking data={record.copyrightTracking || {}} />
            </Card>
          );
        })
      }
      <AddReserve courseListingId={course.courseListingId} />
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
