import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, FormattedMessage } from 'react-intl';
import { withRouter } from 'react-router';
import get from 'lodash/get';
import { stripesConnect } from '@folio/stripes/core'; // just for resources.query
import { Button, Icon, Pane, SearchField } from '@folio/stripes/components';
import renderFilter from '../util/renderFilter';
import filterString2state from '../util/filterString2state';
import css from './Courses.css';
import FilterNavigation from './FilterNavigation';


// Value gets set into the `qindex` parameter of the UI URL, and used in the generated back-end query
const rawSearchableIndexes = [
  { label: 'allFields', value: '', placeholder: '(name, number)' },
  { label: 'courseName', value: 'name' },
  { label: 'courseCode', value: 'courseNumber' },
  { label: 'section', value: 'sectionName' },
  { label: 'instructor', value: 'courseListing.instructorObjects' },
  { label: 'registrarId', value: 'courseListing.registrarId' },
  { label: 'externalId', value: 'courseListing.externalId' },
];
let searchableIndexes;


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
    mutator: PropTypes.shape({
      query: PropTypes.shape({
        update: PropTypes.func.isRequired,
      }).isRequired,
    }),
    stripes: PropTypes.shape({
      logger: PropTypes.shape({
        log: PropTypes.func.isRequired,
      }).isRequired,
    }).isRequired,
    options: PropTypes.object.isRequired,
    intl: PropTypes.shape({
      formatMessage: PropTypes.func.isRequired,
    }),
  };

  static manifest = Object.freeze({
    query: { initialValue: {} },
  });

  onChangeIndex = (e) => {
    const qindex = e.target.value;
    this.props.stripes.logger.log('action', `changed query-index to '${qindex}'`);
    this.props.mutator.query.update({ qindex });
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
      intl,
    } = this.props;
    const searchHandlers = getSearchHandlers();
    const filterHandlers = getFilterHandlers();

    if (!searchableIndexes) {
      searchableIndexes = rawSearchableIndexes.map(x => (
        { value: x.value, label: intl.formatMessage({ id: `ui-courses.index.courses.${x.label}` }) }
      ));
    }

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
                  inputref={searchField}
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
          {renderFilter(filterHandlers, activeFilters, options, 'locations', 'location')}
        </form>
      </Pane>
    );
  }
}


export default injectIntl(withRouter(stripesConnect(CoursesSearchPane)));
