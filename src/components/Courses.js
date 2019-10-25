import React from 'react';
import PropTypes from 'prop-types';
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

import Links from './Links';


class Courses extends React.Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    coursesData: PropTypes.shape({
      courses: PropTypes.arrayOf(
        PropTypes.object,
      ).isRequired,
    }).isRequired,
    onNeedMoreData: PropTypes.func.isRequired,
    queryGetter: PropTypes.func.isRequired,
    querySetter: PropTypes.func.isRequired,
    source: PropTypes.shape({
      loaded: PropTypes.func.isRequired,
      totalCount: PropTypes.func.isRequired,
    }),
  };

  constructor(props) {
    super(props);
    this.state = {
      // For some reason, ESLint doesn't pick up the use of filterPaneIsVisible in toggleFilterPane
      filterPaneIsVisible: true, // eslint-disable-line react/no-unused-state
    };
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
      queryGetter,
      querySetter,
      source,
    } = this.props;

    const query = queryGetter() || {};
    const count = source ? source.totalCount() : 0;
    const sortOrder = query.sort || '';

    const resultsFormatter = {
      externalId: r => r.courseListingObject.externalId,
    };

    return (
      <SearchAndSortQuery
        querySetter={querySetter}
        queryGetter={queryGetter}
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
                      <div>
                        <FormattedMessage id="ui-courses.searchInputLabel">
                          { ariaLabel => (
                            <SearchField
                              aria-label={ariaLabel}
                              autoFocus
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
                      <div>
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
                    // onRowClick={onSelectRow}
                    sortDirection={sortOrder.startsWith('-') ? 'descending' : 'ascending'}
                    sortOrder={sortOrder.replace(/^-/, '').replace(/,.*/, '')}
                    totalCount={count}
                    virtualize
                    visibleColumns={['name', 'description', 'courseNumber', 'sectionName', 'externalId']}
                    columnMapping={{
                      name: <FormattedMessage id="ui-courses.column.name" />,
                      description: <FormattedMessage id="ui-courses.column.description" />,
                      courseNumber: <FormattedMessage id="ui-courses.column.courseNumber" />,
                      sectionName: <FormattedMessage id="ui-courses.column.sectionName" />,
                      externalId: <FormattedMessage id="ui-courses.column.externalId" />,
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

export default Courses;
