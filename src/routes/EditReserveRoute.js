import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import get from 'lodash/get';
import cloneDeep from 'lodash/cloneDeep';
import { stripesConnect } from '@folio/stripes/core';
import ReserveForm from '../components/ReserveForm';
import NoPermissions from '../components/NoPermissions';
import fetchIsPending from '../util/fetchIsPending';
import getOptions from '../util/getOptions';
import exciseObjects from '../util/exciseObjects';
import manifest from '../util/manifest';


class EditReserveRoute extends React.Component {
  static manifest = Object.freeze({
    reserve: {
      type: 'okapi',
      path: 'coursereserves/courselistings/:{clid}/reserves/:{id}',
    },
    item: {
      type: 'okapi',
      path: 'item-storage/items/:{itemId}',
    },
    crossListed: {
      type: 'okapi',
      path: 'coursereserves/courses',
      params: (_q, _p, _r, _l, props) => {
        const reserve = get(props, 'resources.reserve.records.0');
        return !reserve ? {} : { limit: 500, query: `courseListingId=="${reserve.courseListingId}"` };
      },
      records: 'courses',
    },
    loanTypes: {
      type: 'okapi',
      path: 'loan-types?limit=500',
    },
    processingStatuses: manifest.processingStatuses,
    locations: manifest.locations,
    copyrightStatuses: manifest.copyrightStatuses,
  });

  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
    location: PropTypes.shape({
      search: PropTypes.string.isRequired,
    }).isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    resources: PropTypes.shape({
      reserve: PropTypes.object,
      item: PropTypes.object,
      loanTypes: PropTypes.object,
      processingStatuses: PropTypes.object,
      locations: PropTypes.object,
      copyrightStatuses: PropTypes.object,
    }).isRequired,
    mutator: PropTypes.shape({
      reserve: PropTypes.shape({
        PUT: PropTypes.func.isRequired,
      }).isRequired,
    }).isRequired,
    stripes: PropTypes.shape({
      hasPerm: PropTypes.func.isRequired,
    }).isRequired,
    intl: PropTypes.shape({
      formatMessage: PropTypes.func.isRequired,
    }),
  };

  getInitialValues = () => {
    const reserve = get(this.props.resources, 'reserve.records[0]', {});
    const courseListing = get(this.props.resources, 'crossListed.records[0].courseListingObject', {});

    const values = cloneDeep(reserve);
    if (!values.startDate) values.startDate = get(courseListing, 'termObject.startDate');
    if (!values.endDate) values.endDate = get(courseListing, 'termObject.endDate');
    return values;
  }

  handleClose = () => {
    const { location, match } = this.props;
    const { cid } = match.params;
    if (cid === '0') {
      this.props.history.push(`/cr/reserves${location.search}`);
    } else {
      this.props.history.push(`/cr/courses/${cid}${location.search}`);
    }
  }

  handleSubmit = (reserve) => {
    this.props.mutator.reserve.PUT(exciseObjects(reserve))
      .then(this.handleClose);
  }

  render() {
    const { resources, stripes, intl } = this.props;

    if (!stripes.hasPerm('course-reserves-storage.reserves.write')) return <NoPermissions />;

    const noneRequired = intl.formatMessage({ id: 'ui-courses.options.noneRequired' });

    return (
      <ReserveForm
        data={{
          reserve: get(resources, 'reserve.records.0'),
          item: get(resources, 'item.records.0'),
          crossListed: get(resources, 'crossListed.records'),
          loanTypes: getOptions(this, 'loanTypes', 'loantypes', noneRequired),
          processingStatuses: getOptions(this, 'processingStatuses', null, noneRequired),
          locations: getOptions(this, 'locations', null, noneRequired),
          copyrightStatuses: getOptions(this, 'copyrightStatuses', null, noneRequired),
        }}
        handlers={{ onClose: this.handleClose }}
        initialValues={this.getInitialValues()}
        isLoading={fetchIsPending(this.props.resources)}
        onSubmit={(reserve) => this.handleSubmit(reserve)}
      />
    );
  }
}

export default injectIntl(stripesConnect(EditReserveRoute));
