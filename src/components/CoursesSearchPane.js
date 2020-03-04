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

function CoursesSearchPane(props) {
  const { sasqParams, toggleFilterPane, searchField } = props;
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
                aria-label={ariaLabel}
                autoFocus
                className={css.searchField}
                data-test-courses-search-input
                id="input-courses-search"
                inputRef={searchField}
                marginBottom0
                name="query"
                onChange={getSearchHandlers().query}
                onClear={getSearchHandlers().reset}
                value={searchValue.query}
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
        [filters go here]
      </form>
    </Pane>
  );
}

CoursesSearchPane.propTypes = {
  sasqParams: PropTypes.object.isRequired,
  toggleFilterPane: PropTypes.func.isRequired,
  searchField: PropTypes.any,
};

export default CoursesSearchPane;
