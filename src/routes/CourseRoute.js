import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import queryString from 'query-string';
import { stripesConnect } from '@folio/stripes/core';
import Course from '../components/Course';


// There are two basic approaches to fetching the cross-listed courses
// as well as the main course we're interested in. Either way, we need
// to find courses that share a courseListingId with the main course.
//
// 1. We can include here a second manifest entry that fetches the
// cross-listed courses using a `params` function to formulate a query
// based on the courseListingId of the main course. An example of this
// approach can be found in the `orderLines` entry of the Agreement
// manifest at https://github.com/folio-org/ui-agreements/blob/cafd42444bcb718ede5af8ca2e4332b52617b230/src/routes/AgreementViewRoute.js#L66-L82
//
// 2. We can fetch the cross-listed courses with a simpler manifest in
// a subcomponent. An example of this approach can be found in the
// handling of <JobLogContainer> in the Local KB Admin module at https://github.com/folio-org/ui-local-kb-admin/blob/abfecd4b10465b7d3acc4659f5487ba9deebfa1f/src/components/Logs/Logs.js#L29-L36
//
// In general, approach 2 is favoured only when lazy-loading
// potentially expensive data within a hidden accordion. Otherwise, we
// prefer approach 1 because it concentrates all data access in a
// single place.

class CourseRoute extends React.Component {
  static manifest = Object.freeze({
    instructorCount: {
      // We mutate this when we delete an instructor, to force a stripes-connect reload
      initialValue: 9999,
    },
    toggleVal: {
      // We mutate this when we delete an reserve, to force a stripes-connect reload
      initialValue: 0,
    },
    course: {
      type: 'okapi',
      path: 'coursereserves/courses/:{id}?unused=%{instructorCount}',
    },
    crossListed: {
      type: 'okapi',
      path: 'coursereserves/courses',
      params: (_q, _p, _r, _l, props) => {
        const rec = get(props.resources, 'course.records.0');
        if (!rec) return {};
        return { query: `courseListingId=="${rec.courseListingId}" not (id=="${rec.id}")` };
      },
      records: 'courses',
    },
    reservesForCourse: {
      type: 'okapi',
      path: (_q, _p, _r, _l, props) => {
        const rec = get(props.resources, 'course.records.0');
        if (!rec) return null;
        const toggleVal = get(props.resources, 'toggleVal');
        return `coursereserves/courselistings/${rec.courseListingId}/reserves?unused=${toggleVal}&expand=*&limit=500&query=cql.allRecords=1 sortby copiedItem.title`;
      },
      records: 'reserves',
    },
    items: {
      type: 'okapi',
      path: 'inventory/items',
      params: (_q, _p, _r, _l, props) => {
        const reserves = get(props.resources, 'reservesForCourse.records');
        if (!reserves || reserves.length === 0) return null;
        return {
          limit: 20,
          query: `id=(${reserves.slice(0, 20).map(x => `"${x.itemId}"`).join(' or ')})`
        };
      },
      records: 'items',
    },
  });

  static propTypes = {
    match: PropTypes.shape({ // used implicitly by manifest.course.path
      params: PropTypes.shape({
        id: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    location: PropTypes.shape({
      search: PropTypes.string.isRequired,
      pathname: PropTypes.string.isRequired,
    }).isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
    handlers: PropTypes.object,
    resources: PropTypes.shape({
      course: PropTypes.object,
    }).isRequired,
    mutator: PropTypes.object.isRequired,
  };

  static defaultProps = {
    handlers: {},
  }

  handleClose = () => {
    const { pathname, search } = this.props.location;
    const query = queryString.parse(search);
    delete query.nreserves;
    const newSearch = queryString.stringify(query);
    this.props.history.push(`${pathname.replace(/(.*)\/.*/, '$1')}${newSearch ? '?' : ''}${newSearch}`);
  }

  render() {
    const { location, handlers, resources, mutator } = this.props;

    const urls = {
      edit: () => {
        const query = queryString.parse(location.search);
        const reserves = get(resources, 'reservesForCourse.records', []);
        query.nreserves = reserves.length;
        return `${this.props.location.pathname}/edit?${queryString.stringify(query)}`;
      },
      crosslist: () => {
        const clid = get(this.props.resources, 'course.records[0].courseListingId');
        return `${this.props.location.pathname}/crosslist/${clid}${this.props.location.search}`;
      }
    };

    return (
      <Course
        data={{
          course: { ...get(resources, 'course.records[0]', {}) },
          crossListed: get(resources, 'crossListed.records', []),
          reserves: get(resources, 'reservesForCourse.records', []),
          items: get(resources, 'items.records', []),
        }}
        handlers={{ ...handlers, onClose: this.handleClose }}
        isLoading={get(resources, 'course.isPending', true)}
        urls={urls}
        resources={resources}
        mutator={mutator}
      />
    );
  }
}
export default stripesConnect(CourseRoute);
