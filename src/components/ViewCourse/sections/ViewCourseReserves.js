import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, FormattedDate } from 'react-intl';
import get from 'lodash/get';
import { IconButton, Card, Col, Layout, Row } from '@folio/stripes/components';
import { withStripes, CalloutContext } from '@folio/stripes/core';
import withOkapiKy from '../../../util/withOkapiKy';
import VCKeyValue from './VCKeyValue';
import AddReserve from './AddReserve';
import AddFastAddReserve from './AddFastAddReserve';


const CopyrightTracking = ({ data }) => {
  const status = get(data, 'copyrightStatusObject.name') || data.copyrightStatusId;
  const asu = <FormattedMessage id={`ui-courses.boolean.${data.additionalSectionsUsed ? 'yes' : 'no'}`} />;

  return (
    <Row>
      <Col xs={12}>
        {
          !data.copyrightStatusId ?
            <FormattedMessage id="ui-courses.copyrightTracking.no" /> : (
              <Card headerStart={<FormattedMessage id="ui-courses.copyrightTracking.yes" />}>
                <Row>
                  <Col xs={6}>
                    <VCKeyValue id="additionalSectionsUsed" value={asu} />
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
  const text = ea.linkText || <FormattedMessage id="ui-courses.link" />;
  return <a rel="noopener noreferrer" target="_blank" href={ea.uri} title={ea.publicNote}>{text}</a>;
}


const ViewCourseReserves = (props) => {
  const callout = useContext(CalloutContext);
  function removeReserve(reserveId) {
    const clid = props.course.courseListingId;
    props.okapiKy(`coursereserves/courselistings/${clid}/reserves/${reserveId}`, {
      method: 'DELETE',
      headers: { Accept: 'text/plain' },
    })
      .text()
      .then(() => {
        props.mutator.toggleVal.replace(props.resources.toggleVal ? 0 : 1);
      })
      .catch(exception => callout.sendCallout({
        type: 'error',
        message: <FormattedMessage id="ui-courses.removeReserve.failure" values={{ message: `${exception}` }} />,
      }));
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
    <>
      {
        reserves.map((record, index) => {
          const copiedItem = record.copiedItem || {};
          const contributors = (copiedItem.contributors || []).map(x => x.name).join(', ');
          const courseListingObject = course.courseListingObject || {};
          const termObject = courseListingObject.termObject || {};
          const item = itemMap[record.itemId];
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
                <IconButton
                  aria-label={ariaLabel}
                  icon="edit"
                  id={`clickable-edit-reserve-${index}`}
                  to={`../reserves/${record.courseListingId}/${course.id}/${record.id}/${record.itemId}/edit`}
                />
              )}
            </FormattedMessage>
          );

          const deleteButton = permissions.delete && (
            <FormattedMessage id="ui-courses.removeReserve">
              {ariaLabel => (
                <IconButton
                  aria-label={ariaLabel}
                  icon="trash"
                  id={`clickable-remove-reserve-${index}`}
                  onClick={() => removeReserve(record.id)}
                />
              )}
            </FormattedMessage>
          );

          const headerEnd = (
            <>
              {editButton}
              {deleteButton}
            </>
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
                  <VCKeyValue id="status" value={item ? get(item, 'status.name') : '?'} />
                </Col>
              </Row>
              <Row>
                <Col xs={3}>
                  <VCKeyValue id="temporaryLocation" value={item ? get(item, 'temporaryLocation.name') : '?'} />
                </Col>
                <Col xs={3}>
                  <VCKeyValue id="temporaryLoanType" value={tlt} />
                </Col>
                <Col xs={3}>
                  <VCKeyValue id="processingStatus" value={ps} />
                </Col>
                <Col xs={3}>
                  <VCKeyValue id="urlLink" value={item ? makeContentLink(item.electronicAccess) : '?'} />
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
      <Row>
        <Col xs={12} md={6}>
          <Card headerStart={<FormattedMessage id="ui-courses.addItem.existing" />}>
            <div style={{ minHeight: '5rem' }}>
              {permissions.add && <AddReserve courseListingId={course.courseListingId} />}
            </div>
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <Card headerStart={<FormattedMessage id="ui-courses.addItem.new" />}>
            <Layout className="textCentered" style={{ marginTop: '2rem', minHeight: '5rem' }}>
              {permissions.add && <AddFastAddReserve courseListingId={course.courseListingId} />}
            </Layout>
          </Card>
        </Col>
      </Row>
    </>
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
  resources: PropTypes.shape({
    toggleVal: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  }).isRequired,
  mutator: PropTypes.shape({
    toggleVal: PropTypes.shape({
      replace: PropTypes.func.isRequired,
    }).isRequired,
  }).isRequired,
  okapiKy: PropTypes.func.isRequired,
};

export default withOkapiKy(withStripes(ViewCourseReserves));
