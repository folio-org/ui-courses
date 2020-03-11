import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, FormattedDate } from 'react-intl';
import get from 'lodash/get';
import { Button, Card, Col, Row } from '@folio/stripes/components';
import { withStripes } from '@folio/stripes/core';
import withOkapiKy from '../../../util/withOkapiKy';
import VCKeyValue from './VCKeyValue';
import AddReserve from './AddReserve';


const CopyrightTracking = ({ data }) => {
  const status = get(data, 'copyrightStatusObject.name') || data.copyrightStatusId;

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
                  <VCKeyValue id="copyrightStatusId" value={status} />
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


function makeContentLink(eaList) {
  const ea = (eaList || [])[0];
  if (!ea || !ea.uri) return null;
  return <a rel="noopener noreferrer" target="_blank" href={ea.uri} title={ea.publicNote}>{ea.linkText || 'Link'}</a>;
}


const ViewCourseReserves = (props) => {
  function removeReserve(reserveId) {
    const oldCount = props.reserves.length;
    const clid = props.course.courseListingId;
    props.okapiKy(`coursereserves/courselistings/${clid}/reserves/${reserveId}`, {
      method: 'DELETE',
      headers: { Accept: 'text/plain' },
    })
      .text()
      .then(() => { props.mutator.reserveCount.replace(oldCount - 1); })
      .catch(exception => console.error('delete reserve failed:', exception)); // eslint-disable-line no-console
  }

  const { course, reserves, items, stripes } = props;
  const itemMap = {};
  items.forEach(item => { itemMap[item.id] = item; });
  const permissions = {
    add: stripes.hasPerm('course-reserves-storage.reserves.item.post'),
    edit: stripes.hasPerm('course-reserves-storage.reserves.item.put'),
    delete: stripes.hasPerm('course-reserves-storage.reserves.item.delete'),
  };

  return (
    <React.Fragment>
      {
        reserves.map((record, index) => {
          const copiedItem = record.copiedItem || {};
          const contributors = (copiedItem.contributors || []).map(x => x.name).join(', ');
          const courseListingObject = course.courseListingObject || {};
          const termObject = courseListingObject.termObject || {};
          const item = itemMap[record.itemId] || {};
          const ps = get(record, 'processingStatusObject.name') || record.processingStatusId;
          const tlt = get(record, 'temporaryLoanTypeObject.name') || record.temporaryLoanTypeId;
          const cipl = get(record, 'copiedItem.permanentLocationObject.name') || record.copiedItem.permanentLocationId ||
                get(item, 'effectiveLocation.name');

          const href = `/inventory/view/${copiedItem.instanceId}/${copiedItem.holdingsId}/${record.itemId}`;
          const linkToItem = (
            <a rel="noopener noreferrer" target="_blank" href={href}>
              Item title:
              &nbsp;
              <i>{copiedItem.title}</i>
            </a>
          );

          const editButton = permissions.edit && (
            <FormattedMessage id="ui-courses.editReserve">
              {ariaLabel => (
                <Button
                  aria-label={ariaLabel}
                  buttonStyle="primary"
                  id={`clickable-edit-reserve-${index}`}
                  marginBottom0
                  to={`../reserves/${record.courseListingId}/${course.id}/${record.id}/edit`}
                >
                  <FormattedMessage id="ui-courses.button.editReserve" />
                </Button>
              )}
            </FormattedMessage>
          );

          const deleteButton = permissions.delete && (
            <FormattedMessage id="ui-courses.removeReserve">
              {ariaLabel => (
                <Button
                  aria-label={ariaLabel}
                  buttonStyle="primary"
                  id={`clickable-remove-reserve-${index}`}
                  marginBottom0
                  onClick={() => removeReserve(record.id)}
                >
                  <FormattedMessage id="ui-courses.button.removeReserve" />
                </Button>
              )}
            </FormattedMessage>
          );

          const headerEnd = (
            <React.Fragment>
              {editButton}
              {deleteButton}
            </React.Fragment>
          );

          return (
            <Card key={index} headerStart={linkToItem} headerEnd={headerEnd}>
              <Row>
                <Col xs={3}>
                  <VCKeyValue id="itemBarcode" value={copiedItem.barcode} />
                </Col>
                <Col xs={3}>
                  <VCKeyValue id="contributor" value={contributors} />
                </Col>
                <Col xs={3}>
                  <VCKeyValue id="permanentLocation" value={cipl} />
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
                  <VCKeyValue id="temporaryLocation" value={get(item, 'temporaryLocation.name')} />
                </Col>
                <Col xs={3}>
                  <VCKeyValue id="temporaryLoanType" value={tlt} />
                </Col>
                <Col xs={3}>
                  <VCKeyValue id="processingStatus" value={ps} />
                </Col>
                <Col xs={3}>
                  <VCKeyValue id="urlLink" value={makeContentLink(item.electronicAccess)} />
                </Col>
              </Row>
              <Row>
                <Col xs={3}>
                  <VCKeyValue
                    id="startDate"
                    value={<FormattedDate value={record.startDate || termObject.startDate} />}
                  />
                </Col>
                <Col xs={3}>
                  <VCKeyValue
                    id="endDate"
                    value={<FormattedDate value={record.endDate || termObject.endDate} />}
                  />
                </Col>
              </Row>
              <CopyrightTracking data={record.copyrightTracking || {}} />
            </Card>
          );
        })
      }
      {permissions.add && <AddReserve courseListingId={course.courseListingId} />}
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
  stripes: PropTypes.shape({
    hasPerm: PropTypes.func.isRequired,
  }).isRequired,
  mutator: PropTypes.shape({
    reserveCount: PropTypes.shape({
      replace: PropTypes.func.isRequired,
    }).isRequired,
  }).isRequired,
  okapiKy: PropTypes.func.isRequired,
};

export default withOkapiKy(withStripes(ViewCourseReserves));
