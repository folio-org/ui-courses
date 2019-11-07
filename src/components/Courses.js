import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { FormattedMessage } from 'react-intl';
import { AppIcon, IfPermission } from '@folio/stripes/core';

import {
  Button,
  Paneset,
  Pane,
  PaneMenu,
  SearchField,
  MultiColumnList,
  Icon
} from '@folio/stripes/components';

import {
  SearchAndSortQuery,
  SearchAndSortNoResultsMessage,
  SearchAndSortSearchButton as FilterPaneToggle,
} from '@folio/stripes/smart-components';

import css from './Courses.css';


// Returns a date object corresponding with the date string in format YYYY-MM-DD'
function makeDate(s) {
  const a = s.split('-');
  const date = new Date(a[0], a[1] - 1, a[2]); // month is zero-based!
  return date;
}

function calculateStatus(termObject) {
  const now = new Date();
  const startDate = makeDate(termObject.startDate);
  const endDate = makeDate(termObject.endDate);
  const tag = (now < startDate) ? 'pending' : (endDate < now) ? 'inactive' : 'active';
  return <FormattedMessage id={`ui-courses.status.${tag}`} />;
}


class Courses extends React.Component {
  static propTypes = {
    location: PropTypes.shape({
      search: PropTypes.string.isRequired,
    }).isRequired,
    children: PropTypes.object.isRequired,
    coursesData: PropTypes.shape({
      courses: PropTypes.arrayOf(
        PropTypes.object,
      ).isRequired,
    }).isRequired,
    onNeedMoreData: PropTypes.func.isRequired,
    query: PropTypes.object.isRequired,
    source: PropTypes.shape({
      loaded: PropTypes.func.isRequired,
      totalCount: PropTypes.func.isRequired,
    }),
    history: PropTypes.shape({ // provided by withRouter
      push: PropTypes.func.isRequired,
    }).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      // For some reason, ESLint doesn't pick up the use of filterPaneIsVisible in toggleFilterPane
      filterPaneIsVisible: true, // eslint-disable-line react/no-unused-state
    };
  }

  onRowClick = (e, row) => {
    this.props.history.push(`/cr/courses/${row.id}${this.props.location.search}`);
  }

  toggleFilterPane = () => {
    this.setState(curState => ({
      filterPaneIsVisible: !curState.filterPaneIsVisible,
    }));
  }

  renderResultsFirstMenu = (filters) => {
    const { filterPaneIsVisible } = this.state;
    const filterCount = filters.string !== '' ? filters.string.split(',').length : 0;
    const hideOrShowMessageId = filterPaneIsVisible ?
      'stripes-smart-components.hideSearchPane' : 'stripes-smart-components.showSearchPane';

    return (
      <PaneMenu>
        <FormattedMessage id="stripes-smart-components.numberOfFilters" values={{ count: filterCount }}>
          {appliedFiltersMessage => (
            <FormattedMessage id={hideOrShowMessageId}>
              {hideOrShowMessage => (
                <FilterPaneToggle
                  visible={filterPaneIsVisible}
                  aria-label={`${hideOrShowMessage}...s${appliedFiltersMessage}`}
                  onClick={this.toggleFilterPane}
                  badge={!filterPaneIsVisible && filterCount ? filterCount : undefined}
                />
              )}
            </FormattedMessage>
          )}
        </FormattedMessage>
      </PaneMenu>
    );
  }

  renderResultsLastMenu() {
    return (
      <IfPermission perm="ui-courses.course.edit">
        <PaneMenu>
          <FormattedMessage id="ui-courses.createCourse">
            {ariaLabel => (
              <Button
                aria-label={ariaLabel}
                buttonStyle="primary"
                id="clickable-new-course"
                marginBottom0
                to="/cr/courses/create"
              >
                <FormattedMessage id="stripes-smart-components.new" />
              </Button>
            )}
          </FormattedMessage>
        </PaneMenu>
      </IfPermission>
    );
  }

  renderResultsPaneSubtitle = (source) => {
    if (source && source.loaded()) {
      const count = source.totalCount();
      return <FormattedMessage id="stripes-smart-components.searchResultsCountHeader" values={{ count }} />;
    }

    return <FormattedMessage id="stripes-smart-components.searchCriteria" />;
  }

  renderIsEmptyMessage = (query, source) => {
    if (!source) {
      return 'no source yet';
    }

    return (
      <div data-test-courses-no-results-message>
        <SearchAndSortNoResultsMessage
          source={source}
          searchTerm={query.query || ''}
          filterPaneIsVisible
          toggleFilterPane={this.toggleFilterPane}
        />
      </div>
    );
  }

  render() {
    const {
      children,
      coursesData,
      onNeedMoreData,
      query,
      source,
    } = this.props;

    const count = source ? source.totalCount() : 0;
    const sortOrder = query.sort || '';

    const resultsFormatter = {
      department: r => r.departmentObject.name,
      serviceDesk: r => r.courseListingObject.servicepointId,
      startDate: r => r.courseListingObject.termObject.startDate,
      endDate: r => r.courseListingObject.termObject.endDate,
      taughtBy: _r => '[NYI]',
      status: r => calculateStatus(r.courseListingObject.termObject),
    };

    return (
      <SearchAndSortQuery
        initialSearchState={{ query: '' }}
        initialSortState={{ sort: 'name' }}
      >
        {
          ({
            searchValue,
            getSearchHandlers,
            onSubmitSearch,
            onSort,
            activeFilters,
            resetAll,
          }) => {
            return (
              <Paneset id="courses-paneset">
                {this.state.filterPaneIsVisible &&
                  <Pane
                    defaultWidth="22%"
                    onClose={this.toggleFilterPane}
                    paneTitle={<FormattedMessage id="stripes-smart-components.searchAndFilter" />}
                  >
                    <form onSubmit={onSubmitSearch}>
                      <div className={css.searchGroupWrap}>
                        <FormattedMessage id="ui-courses.searchInputLabel">
                          { ariaLabel => (
                            <SearchField
                              aria-label={ariaLabel}
                              autoFocus
                              className={css.searchField}
                              data-test-courses-search-input
                              id="input-courses-search"
                              inputRef={this.searchField}
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
                    </form>
                  </Pane>
                }
                <Pane
                  appIcon={<AppIcon app="courses" />}
                  defaultWidth="fill"
                  firstMenu={this.renderResultsFirstMenu(activeFilters)}
                  lastMenu={this.renderResultsLastMenu()}
                  padContent={false}
                  paneTitle={<FormattedMessage id="ui-courses.meta.title" />}
                  paneSub={this.renderResultsPaneSubtitle(source)}
                >
                  <MultiColumnList
                    autosize
                    columnWidths={this.columnWidths}
                    contentData={coursesData.courses}
                    id="list-courses"
                    isEmptyMessage={this.renderIsEmptyMessage(query, source)}
                    onHeaderClick={onSort}
                    onNeedMoreData={onNeedMoreData}
                    onRowClick={this.onRowClick}
                    sortDirection={sortOrder.startsWith('-') ? 'descending' : 'ascending'}
                    sortOrder={sortOrder.replace(/^-/, '').replace(/,.*/, '')}
                    totalCount={count}
                    virtualize
                    visibleColumns={['name', 'courseNumber', 'department', 'serviceDesk', 'startDate', 'endDate', 'taughtBy', 'status']}
                    columnMapping={{
                      name: <FormattedMessage id="ui-courses.column.name" />,
                      courseNumber: <FormattedMessage id="ui-courses.column.courseNumber" />,
                      department: <FormattedMessage id="ui-courses.column.department" />,
                      serviceDesk: <FormattedMessage id="ui-courses.column.serviceDesk" />,
                      startDate: <FormattedMessage id="ui-courses.column.startDate" />,
                      endDate: <FormattedMessage id="ui-courses.column.endDate" />,
                      taughtBy: <FormattedMessage id="ui-courses.column.taughtBy" />,
                      status: <FormattedMessage id="ui-courses.column.status" />,
                    }}
                    formatter={resultsFormatter}
                  />
                </Pane>

                { children }

              </Paneset>
            );
          }
        }
      </SearchAndSortQuery>
    );
  }
}

export default withRouter(Courses);
