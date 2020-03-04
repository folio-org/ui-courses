import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import {
  Accordion,
  Button,
  FilterAccordionHeader,
  Icon,
  MultiSelectionFilter,
  Pane,
  SearchField,
} from '@folio/stripes/components';

import css from './Courses.css';
import FilterNavigation from './FilterNavigation';

const searchableIndexes = [
]; // XXX for now

const selectedIndex = 'all'; // XXX for now

// eslint-disable-next-line no-console
const onChangeIndex = (x) => console.log('index changed:', x); // XXX for now

const department = [
  // 1, 2
]; // XXX for now

const departmentOptions = [
/*
  { value: 1, label: 'this' },
  { value: 2, label: 'that' },
  { value: 3, label: 'whatever' },
  { value: 4, label: 'the other' },
*/
]; // XXX for now

// eslint-disable-next-line no-console
const onClearFilter = (x) => console.log('clear filter:', x); // XXX for now

// eslint-disable-next-line no-console
const onChangeFilter = (x) => console.log('filter changed:', x); // XXX for now


function CoursesSearchPane(props) {
  const {
    searchValue,
    getSearchHandlers,
    onSubmitSearch,
    // activeFilters,
    resetAll,
    source,
    toggleFilterPane,
    searchField
  } = props;

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
                selectedIndex={selectedIndex}
                value={searchValue.query}
                loading={source ? source.pending() : true}
                marginBottom0
                onChangeIndex={onChangeIndex}
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
          onClearFilter={() => onClearFilter('department')}
        >
          {/*
          <MultiSelectionFilter
            name="department"
            dataOptions={departmentOptions}
            selectedValues={department}
            onChange={onChangeFilter}
          />
          */}
          [department select]
        </Accordion>
      </form>
    </Pane>
  );
}

CoursesSearchPane.propTypes = {
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
};

export default CoursesSearchPane;
