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


function renderFilter(filterHandlers, activeFilters, options, name, translationId) {
  const values = activeFilters[name] || [];

  return (
    <Accordion
      label={<FormattedMessage id={`ui-courses.filters.${translationId}`} />}
      id={name}
      name={name}
      separator={false}
      header={FilterAccordionHeader}
      displayClearButton={values.length > 0}
      onClearFilter={() => filterHandlers.clearGroup(name)}
    >
      <MultiSelectionFilter
        name={name}
        dataOptions={options[name]}
        selectedValues={values}
        onChange={(group) => filterHandlers.state({ ...activeFilters, [group.name]: group.values })}
      />
    </Accordion>
  );
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
    options: PropTypes.object.isRequired,
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
      options,
    } = this.props;
    const searchHandlers = getSearchHandlers();
    const filterHandlers = getFilterHandlers();

    const filters = get(resources.query, 'filters');
    const activeFilters = filterString2state(filters);

    return (
      <Pane
        defaultWidth="28%"
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

          {renderFilter(filterHandlers, activeFilters, options, 'departments', 'department')}
          {renderFilter(filterHandlers, activeFilters, options, 'coursetypes', 'coursetype')}
          {renderFilter(filterHandlers, activeFilters, options, 'terms', 'term')}
        </form>
      </Pane>
    );
  }
}


export default withRouter(stripesConnect(CoursesSearchPane));
