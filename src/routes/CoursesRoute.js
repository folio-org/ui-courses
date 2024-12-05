import React from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import { stripesConnect } from '@folio/stripes/core';
import { makeQueryFunction, StripesConnectedSource } from '@folio/stripes/smart-components';
import getOptions from '../util/getOptions';
import manifest from '../util/manifest';
import Courses from '../components/Courses';


const INITIAL_RESULT_COUNT = 100;
const RESULT_COUNT_INCREMENT = 100;


const sortMap = {
  // XXX none of these work: we need to figure out why
  registrarId: 'courseListing.registrarId', // UICR-49
  department: 'department.name', // UICR-49
  startDate: 'courseListing.term.startDate', // UICR-50
  endDate: 'courseListing.term.endDate', // UICR-50
  instructor: 'courseListing.instructorObjects',
  status: 'courseListing.term.startDate' // XXX is this close enough?
};

const filterConfig = [{
  name: 'departments',
  cql: 'departmentId',
  values: [],
}, {
  name: 'coursetypes',
  cql: 'courseListing.courseTypeId',
  values: [],
}, {
  name: 'terms',
  cql: 'courseListing.termId',
  values: [],
}, {
  name: 'locations',
  cql: 'courseListing.locationId',
  values: [],
}];

// XXX keep in sync with `value` members in ../components/CoursesSearchPane.js
const searchableIndexes = [
  'name',
  'courseNumber',
  'sectionName',
  'courseListing.instructorObjects',
  'courseListing.registrarId',
  'courseListing.externalId',
];


class CoursesRoute extends React.Component {
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
    courses: {
      type: 'okapi',
      records: 'courses',
      recordsRequired: '%{resultCount}',
      perRequest: RESULT_COUNT_INCREMENT,
      path: 'coursereserves/courses',
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
        }
      },
    },
    query: { initialValue: {} },
    resultCount: { initialValue: INITIAL_RESULT_COUNT },
    departments: manifest.departments,
    coursetypes: manifest.coursetypes,
    terms: manifest.terms,
    locations: manifest.locations,
  });

  constructor(props) {
    super(props);
    this.logger = props.stripes.logger;
    this.searchField = React.createRef();
  }

  componentDidMount() {
    this.source = new StripesConnectedSource(this.props, this.logger, 'courses');
    if (this.searchField.current) this.searchField.current.focus();
  }

  handleNeedMoreData = () => {
    if (this.source) this.source.fetchMore(RESULT_COUNT_INCREMENT);
  }

  render() {
    const { children, resources } = this.props;

    if (this.source) this.source.update(this.props, 'courses');

    return (
      <Courses
        data={{
          courses: get(resources, 'courses.records', []),
          options: {
            departments: getOptions(this, 'departments'),
            coursetypes: getOptions(this, 'coursetypes', 'courseTypes'),
            terms: getOptions(this, 'terms'),
            locations: getOptions(this, 'locations'),
          }
        }}
        onNeedMoreData={this.handleNeedMoreData}
        query={resources.query || {}}
        source={this.source}
      >
        { children }
      </Courses>
    );
  }
}


export default stripesConnect(CoursesRoute);
