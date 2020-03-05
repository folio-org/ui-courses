import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { withRouter } from 'react-router';
import get from 'lodash/get';
import { stripesConnect } from '@folio/stripes/core'; // just for resources.query

import {
  Accordion,
  Button,
  FilterAccordionHeader,
  Icon,
  Pane,
  SearchField,
} from '@folio/stripes/components';
import { MultiSelectionFilter } from '@folio/stripes/smart-components';

import updateLocation from '../util/updateLocation';
import css from './Courses.css';
import FilterNavigation from './FilterNavigation';


// Value gets set into the `qindex` parameter of the UI URL, and used in the generated back-end query
const searchableIndexes = [
  { label: 'All fields', value: '', placeholder: '(name, number)' },
  { label: 'Course name', value: 'name' },
  { label: 'Course code', value: 'courseNumber' },
  { label: 'Instructor', value: 'courseListingObject.instructorObjects.name' },
  { label: 'Registrar ID', value: 'courseListingObject.registrarId' },
  { label: 'External ID', value: 'courseListingObject.externalId' },
];

const department = ['1', '2']; // XXX for now

const departmentOptions = [
  { value: '1', label: 'this' },
  { value: '2', label: 'that' },
  { value: '3', label: 'whatever' },
  { value: '4', label: 'the other' },
]; // XXX for now


class CoursesSearchPane extends React.Component {
  static propTypes = {
    searchValue: PropTypes.shape({
      query: PropTypes.string.isRequired,
    }).isRequired,
    getSearchHandlers: PropTypes.func.isRequired,
    onSubmitSearch: PropTypes.func.isRequired,
    // activeFilters: PropTypes.array.isRequired,
    resetAll: PropTypes.func.isRequired,
    source: PropTypes.object,
    toggleFilterPane: PropTypes.func.isRequired,
    searchField: PropTypes.any, // eslint-disable-line react/forbid-prop-types
    resources: PropTypes.shape({
      query: PropTypes.shape({
        qindex: PropTypes.string,
      }).isRequired,
    }).isRequired,
    stripes: PropTypes.shape({
      logger: PropTypes.shape({
        log: PropTypes.func.isRequired,
      }).isRequired,
    }).isRequired,
  };

  static manifest = Object.freeze({
    query: { initialValue: {} },
  });

  onChangeIndex = (e) => {
    const qindex = e.target.value;
    this.props.stripes.logger.log('action', `changed query-index to '${qindex}'`);
    updateLocation(this.props, { qindex });
  };

  onChangeFilter = (filter) => {
    this.props.stripes.logger.log('action', `changed filter ${filter.name} to`, filter.values);
    return;

    const {
      parentMutator: { resultCount, resultOffset },
      initialResultCount,
      onFilterChange,
    } = this.props;

    resultCount.replace(initialResultCount);

    if (resultOffset) {
      resultOffset.replace(0);
    }

    onFilterChange(filter);
  };

  onClearFilter = (name) => this.onChangeFilter({ name, values: [] });

  render() {
    const {
      searchValue,
      getSearchHandlers,
      onSubmitSearch,
      // activeFilters,
      resetAll,
      source,
      toggleFilterPane,
      searchField,
      resources,
    } = this.props;

    return (
      <Pane
        defaultWidth="22%"
        onClose={toggleFilterPane}
        paneTitle={<FormattedMessage id="stripes-smart-components.searchAndFilter" />}
      >
        <form onSubmit={onSubmitSearch}>
          <FilterNavigation current="courses" />
          <div className={css.searchGroupWrap}>
            <FormattedMessage id="ui-courses.searchInputLabel">
              { ariaLabel => (
                <SearchField
                  data-test-courses-search-input
                  id="input-courses-search"
                  autoFocus
                  ariaLabel={ariaLabel}
                  className={css.searchField}
                  searchableIndexes={searchableIndexes}
                  selectedIndex={get(resources.query, 'qindex')}
                  value={searchValue.query}
                  loading={source ? source.pending() : true}
                  marginBottom0
                  onChangeIndex={this.onChangeIndex}
                  onChange={getSearchHandlers().query}
                  onClear={getSearchHandlers().reset}
                  name="query"
                  inputRef={searchField}
                />
              )}
            </FormattedMessage>
            <Button
              buttonStyle="primary"
              disabled={!searchValue.query || searchValue.query === ''}
              fullWidth
              id="clickable-search-courses"
              marginBottom0
              type="submit"
            >
              <FormattedMessage id="stripes-smart-components.search" />
            </Button>
          </div>
          <div className={css.resetButtonWrap}>
            <Button
              buttonStyle="none"
              id="clickable-reset-all"
              disabled={false}
              onClick={resetAll}
            >
              <Icon icon="times-circle-solid">
                <FormattedMessage id="stripes-smart-components.resetAll" />
              </Icon>
            </Button>
          </div>

          <Accordion
            label={<FormattedMessage id="ui-courses.filters.department" />}
            id="department"
            name="department"
            separator={false}
            header={FilterAccordionHeader}
            displayClearButton={department.length > 0}
            onClearFilter={this.onClearFilter}
          >
            <MultiSelectionFilter
              name="department"
              dataOptions={departmentOptions}
              selectedValues={department}
              onChange={this.onChangeFilter}
            />
          </Accordion>
        </form>
      </Pane>
    );
  }
}


export default withRouter(stripesConnect(CoursesSearchPane));
