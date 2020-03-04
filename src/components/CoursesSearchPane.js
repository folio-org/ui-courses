import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import {
  Button,
  Pane,
  SearchField,
  Icon
} from '@folio/stripes/components';

import css from './Courses.css';
import FilterNavigation from './FilterNavigation';

const searchableIndexes = [
]; // XXX for now

const selectedIndex = 'all'; // XXX for now

// eslint-disable-next-line no-console
const onChangeIndex = (x) => console.log('index changed:', x); // XXX for now

function CoursesSearchPane(props) {
  const { source, sasqParams, toggleFilterPane, searchField } = props;
  const {
    searchValue,
    getSearchHandlers,
    onSubmitSearch,
    // activeFilters,
    resetAll,
  } = sasqParams;

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

        {/*
        <Accordion
          label={<FormattedMessage id="ui-inventory.filters.effectiveLocation" />}
          id="effectiveLocation"
          name="effectiveLocation"
          separator={false}
          header={FilterAccordionHeader}
          displayClearButton={effectiveLocation.length > 0}
          onClearFilter={() => onClear('effectiveLocation')}
        >
          <MultiSelectionFilter
            name="effectiveLocation"
            dataOptions={effectiveLocationOptions}
            selectedValues={effectiveLocation}
            onChange={onChange}
          />
        </Accordion>
        */}
      </form>
    </Pane>
  );
}

CoursesSearchPane.propTypes = {
  source: PropTypes.object.isRequired,
  sasqParams: PropTypes.object.isRequired,
  toggleFilterPane: PropTypes.func.isRequired,
  searchField: PropTypes.any, // eslint-disable-line react/forbid-prop-types
};

export default CoursesSearchPane;
