import React from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';

import { stripesConnect } from '@folio/stripes/core';
import { makeQueryFunction, StripesConnectedSource } from '@folio/stripes/smart-components';

import Courses from '../components/Courses';


const INITIAL_RESULT_COUNT = 100;
const RESULT_COUNT_INCREMENT = 100;


const sortMap = {
  'Name': 'name',
  'reserve': 'reserve.title',
};
const filterConfig = [];


class ViewCourses extends React.Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    stripes: PropTypes.shape({
      logger: PropTypes.object.isRequired,
    }).isRequired,
    resources: PropTypes.shape({
      query: PropTypes.object,
    }),
    mutator: PropTypes.shape({
      query: PropTypes.shape({
        update: PropTypes.func.isRequired,
      }).isRequired,
    }),
  };

  static manifest = Object.freeze({
    courses: {
      type: 'okapi',
      records: 'courses',
      recordsRequired: '%{resultCount}',
      perRequest: RESULT_COUNT_INCREMENT,
      limitParam: 'perPage',
      path: 'coursereserves/courses',
      params: {
        query: makeQueryFunction(
          'cql.allRecords=1',
          'name="%{query}*" or description="%{query}*"',
          sortMap,
          filterConfig,
        ),
      },
    },
    query: { initialValue: {} },
    resultCount: { initialValue: INITIAL_RESULT_COUNT },
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

  // XXX Do we need this or is it the default?
  querySetter = ({ nsValues }) => {
    this.props.mutator.query.update(nsValues);
  }

  // XXX Do we need this or is it the default?
  queryGetter = () => {
    return get(this.props.resources, 'query', {});
  }

  handleNeedMoreData = () => {
    if (this.source) this.source.fetchMore(RESULT_COUNT_INCREMENT);
  }

  render() {
    const { children, resources } = this.props;

    if (this.source) this.source.update(this.props, 'courses');

    return (
      <Courses
        coursesData={{
          courses: get(resources, 'courses.records', []),
        }}
        onNeedMoreData={this.handleNeedMoreData}
        queryGetter={this.queryGetter}
        querySetter={this.querySetter}
        source={this.source}
      >
        { children }
      </Courses>
    );
  }
}


export default stripesConnect(ViewCourses);
