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

const departmentOptions = [
  {
    value: '1566841c-51ce-4d4c-aa09-0ea21b00904a',
    label: 'Earth Sciences',
  }, {
    value: '5bec21a6-b148-47d5-8cf0-0082e02f9698',
    label: 'Humanities',
  }, {
    value: '1fc91124-cd2a-4fae-9ae4-40368d80982d',
    label: 'Mathematics',
  }
]; // XXX for now


// For some reason, neither initialFilterState nor filterState works for me
function filterString2state(filters) {
  const state = {};

  if (filters) {
    filters.split(',').forEach(fullName => {
      const [group, value] = fullName.split('.');
      if (!state[group]) state[group] = [];
      state[group].push(value);
    });
  }

  return state;
}


class CoursesSearchPane extends React.Component {
  static propTypes = {
    searchValue: PropTypes.shape({
      query: PropTypes.string.isRequired,
    }).isRequired,
    getSearchHandlers: PropTypes.func.isRequired,
    getFilterHandlers: PropTypes.func.isRequired,
    onSubmitSearch: PropTypes.func.isRequired,
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

  render() {
    const {
      searchValue,
      getSearchHandlers,
      getFilterHandlers,
      onSubmitSearch,
      resetAll,
      source,
      toggleFilterPane,
      searchField,
      resources,
    } = this.props;
    const searchHandlers = getSearchHandlers();
    const filterHandlers = getFilterHandlers();

    const filters = get(resources.query, 'filters');
    const activeFilters = filterString2state(filters);
    const department = activeFilters.department || [];

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
                  onChange={searchHandlers.query}
                  onClear={searchHandlers.reset}
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
            onClearFilter={() => filterHandlers.clearGroup('department')}
          >
            <MultiSelectionFilter
              name="department"
              dataOptions={departmentOptions}
              selectedValues={department}
              onChange={(group) => filterHandlers.state({ ...activeFilters, [group.name]: group.values })}
            />
          </Accordion>
        </form>
      </Pane>
    );
  }
}


export default withRouter(stripesConnect(CoursesSearchPane));