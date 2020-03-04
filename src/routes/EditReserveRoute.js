import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import cloneDeep from 'lodash/cloneDeep';
import { stripesConnect } from '@folio/stripes/core';
import ReserveForm from '../components/ReserveForm';
import NoPermissions from '../components/NoPermissions';
import fetchIsPending from '../util/fetchIsPending';
import getOptions from '../util/getOptions';
import exciseObjects from '../util/exciseObjects';


class EditReserveRoute extends React.Component {
  static manifest = Object.freeze({
    reserve: {
      type: 'okapi',
      path: 'coursereserves/courselistings/:{clid}/reserves/:{id}',
    },
    item: {
      type: 'okapi',
      // Regarding the separate PUT and GET path-functions, see UICR-43
      GET: {
        path: (_query, _pathComponents, _resources, _logger, props) => {
          const reserve = get(props, 'resources.reserve.records.0');
          return !reserve ? null : `item-storage/items/${reserve.itemId}`;
        },
      },
      PUT: {
        path: (_query, _pathComponents, resources, _logger, _props) => {
          const reserve = get(resources, 'reserve.records.0');
          return !reserve ? null : `item-storage/items/${reserve.itemId}`;
        },
      },
    },
    crossListed: {
      type: 'okapi',
      path: 'coursereserves/courses',
      params: (_q, _p, _r, _l, props) => {
        const reserve = get(props, 'resources.reserve.records.0');
        return !reserve ? {} : { query: `courseListingId=="${reserve.courseListingId}"` };
      },
      records: 'courses',
    },
    loanTypes: {
      type: 'okapi',
      path: 'loan-types',
      // records: 'loantypes',
    },
    processingStatuses: {
      type: 'okapi',
      path: 'coursereserves/processingstatuses',
    },
    locations: {
      type: 'okapi',
      path: 'locations?limit=500&query=cql.allRecords=1 sortby name',
      shouldRefresh: () => false,
    },
    copyrightStatuses: {
      type: 'okapi',
      path: 'coursereserves/copyrightstatuses',
    },
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
      item: PropTypes.shape({
        PUT: PropTypes.func.isRequired,
      }).isRequired,
    }).isRequired,
    stripes: PropTypes.shape({
      hasPerm: PropTypes.func.isRequired,
    }).isRequired,
  };

  getInitialValues = () => {
    const reserve = get(this.props.resources, 'reserve.records[0]', {});
    const item = get(this.props.resources, 'item.records[0]', {});

    const values = cloneDeep(reserve);
    values.temporaryLocationId = item.temporaryLocationId;
    return values;
  }

  handleClose = () => {
    const { location, match } = this.props;
    this.props.history.push(`/cr/courses/${match.params.cid}${location.search}`);
  }

  handleSubmit = (reserve, item) => {
    const temporaryLocationId = reserve.temporaryLocationId;
    delete reserve.temporaryLocationId;

    const newItem = Object.assign({}, item, { temporaryLocationId });
    this.props.mutator.reserve.PUT(exciseObjects(reserve))
      .then(() => this.props.mutator.item.PUT(newItem))
      .then(this.handleClose);
  }

  render() {
    const { resources, stripes } = this.props;

    if (!stripes.hasPerm('course-reserves-storage.reserves.write')) return <NoPermissions />;

    const item = get(resources, 'item.records[0]');

    return (
      <ReserveForm
        data={{
          reserve: get(resources, 'reserve.records.0'),
          item: get(resources, 'item.records.0'),
          crossListed: get(resources, 'crossListed.records'),
          loanTypes: getOptions(this, 'loanTypes', 'loantypes'),
          processingStatuses: getOptions(this, 'processingStatuses', null, '(None required)'),
          locations: getOptions(this, 'locations'),
          copyrightStatuses: getOptions(this, 'copyrightStatuses', null, '(None required)'),
        }}
        handlers={{ onClose: this.handleClose }}
        initialValues={this.getInitialValues()}
        isLoading={fetchIsPending(this.props.resources)}
        onSubmit={(reserve) => this.handleSubmit(reserve, item)}
      />
    );
  }
}

export default stripesConnect(EditReserveRoute);
