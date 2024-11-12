import React from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import { stripesConnect } from '@folio/stripes/core';
import { makeQueryFunction, StripesConnectedSource } from '@folio/stripes/smart-components';
import getOptions from '../util/getOptions';
import manifest from '../util/manifest';
import Reserves from '../components/Reserves';


const INITIAL_RESULT_COUNT = 100;
const RESULT_COUNT_INCREMENT = 100;


const sortMap = {
  title: 'copiedItem.title',
  barcode: 'copiedItem.barcode',
  status: 'processingStatus.name',
  permanentLocation: 'copiedItem.permanentLocation.name',
  temporaryLocation: 'copiedItem.temporaryLocation.name',
};

const filterConfig = [{
  name: 'processingStatuses',
  cql: 'processingStatusId',
  values: [],
}, {
  name: 'copyrightStatuses',
  cql: 'copyrightTracking.copyrightStatusId',
  values: [],
}, {
  name: 'permanentLocations',
  cql: 'copiedItem.permanentLocationId',
  values: [],
}, {
  name: 'temporaryLocations',
  cql: 'copiedItem.temporaryLocationId',
  values: [],
}, {
  name: 'terms',
  cql: 'courseListing.termId',
  values: [],
}];

// XXX keep in sync with `value` members in ../components/ReservesSearchPane.js
const searchableIndexes = [
  'copiedItem.title',
  'copiedItem.barcode',
  'copiedItem.callNumber',
];


class ReservesRoute extends React.Component {
  static propTypes = {
    children: PropTypes.object,
    stripes: PropTypes.shape({
      logger: PropTypes.object.isRequired,
    }).isRequired,
    resources: PropTypes.shape({
      query: PropTypes.object,
    }),
  };

  static manifest = Object.freeze({
    reserves: {
      type: 'okapi',
      records: 'reserves',
      recordsRequired: '%{resultCount}',
      perRequest: RESULT_COUNT_INCREMENT,
      path: 'coursereserves/reserves',
      params: {
        query: (qp, pathComponents, rv, logger) => {
          if (qp.query === undefined) return undefined;
          // Is it not a strange fate that we should suffer so much fear and doubt for so small a thing?
          const qq = qp.query.replace(/\*+$/, '');
          const queryFunction = makeQueryFunction(
            'cql.allRecords=1',
            searchableIndexes.map(index => `${index}="${qq}*"`).join(' or '),
            sortMap,
            filterConfig,
          );
          const newQp = { ...qp, query: qq };
          const newRv = { ...rv, query: newQp };
          return queryFunction(newQp, pathComponents, newRv, logger);
        },
        expand: '*',
      },
    },
    query: { initialValue: {} },
    resultCount: { initialValue: INITIAL_RESULT_COUNT },
    processingStatuses: manifest.processingStatuses,
    copyrightStatuses: manifest.copyrightStatuses,
    locations: manifest.locations,
    terms: manifest.terms,
  });

  constructor(props) {
    super(props);
    this.logger = props.stripes.logger;
    this.searchField = React.createRef();
  }

  componentDidMount() {
    this.source = new StripesConnectedSource(this.props, this.logger, 'reserves');
    if (this.searchField.current) this.searchField.current.focus();
  }

  handleNeedMoreData = () => {
    if (this.source) this.source.fetchMore(RESULT_COUNT_INCREMENT);
  }

  render() {
    const { children, resources } = this.props;

    if (this.source) this.source.update(this.props, 'reserves');

    return (
      <Reserves
        data={{
          reserves: get(resources, 'reserves.records', []),
          options: {
            processingStatuses: getOptions(this, 'processingStatuses'),
            copyrightStatuses: getOptions(this, 'copyrightStatuses'),
            locations: getOptions(this, 'locations'),
            terms: getOptions(this, 'terms'),
          },
        }}
        onNeedMoreData={this.handleNeedMoreData}
        query={resources.query || {}}
        source={this.source}
      >
        { children }
      </Reserves>
    );
  }
}


export default stripesConnect(ReservesRoute);
