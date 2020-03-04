import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { withRouter } from 'react-router';

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


// Value is simply what gets set into the `qindex` parameter of the UI URL
const searchableIndexes = [
  { label: 'All fields', value: 'all', placeholder: '(name, number)' },
  { label: 'Course name', value: 'name' },
  { label: 'Course code', value: 'number' },
  { label: 'Instructor', value: 'instructor' },
  { label: 'Registrar ID', value: 'regid' },
  { label: 'External ID', value: 'extid' },
];

const selectedIndex = 'all'; // XXX for now

const onChangeIndex = (props, e) => {
  const qindex = e.target.value;
  console.log(`index changed to ${qindex}`); // eslint-disable-line no-console
  updateLocation(props, { qindex });
};


const department = ['1', '2']; // XXX for now

const departmentOptions = [
  { value: '1', label: 'this' },
  { value: '2', label: 'that' },
  { value: '3', label: 'whatever' },
  { value: '4', label: 'the other' },
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
                onChangeIndex={e => onChangeIndex(props, e)}
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
          <MultiSelectionFilter
            name="department"
            dataOptions={departmentOptions}
            selectedValues={department}
            onChange={onChangeFilter}
          />
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

export default withRouter(CoursesSearchPane);
