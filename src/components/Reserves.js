import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { FormattedMessage } from 'react-intl';
import get from 'lodash/get';
import { AppIcon } from '@folio/stripes/core';

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

import css from './Courses.css'; // No need for separate CSS
import FilterNavigation from './FilterNavigation';


class Reserves extends React.Component {
  static propTypes = {
    location: PropTypes.shape({
      search: PropTypes.string.isRequired,
    }).isRequired,
    children: PropTypes.object,
    reservesData: PropTypes.shape({
      reserves: PropTypes.arrayOf(
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
    this.state = { filterPaneIsVisible: true };
  }

  onRowClick = (e, row) => {
    this.props.history.push(`/cr/reserves/${row.id}${this.props.location.search}`);
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
      reservesData,
      onNeedMoreData,
      query,
      source,
    } = this.props;

    const count = source ? source.totalCount() : 0;
    const sortOrder = query.sort || '';

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
              <Paneset id="reserves-paneset">
                {this.state.filterPaneIsVisible &&
                  <Pane
                    defaultWidth="22%"
                    onClose={this.toggleFilterPane}
                    paneTitle={<FormattedMessage id="stripes-smart-components.searchAndFilter" />}
                  >
                    <form onSubmit={onSubmitSearch}>
                      <FilterNavigation current="reserves" />
                      <div className={css.searchGroupWrap}>
                        <FormattedMessage id="ui-courses.searchInputLabel">
                          { ariaLabel => (
                            <SearchField
                              aria-label={ariaLabel}
                              autoFocus
                              className={css.searchField}
                              data-test-reserves-search-input
                              id="input-reserves-search"
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
                          id="clickable-search-reserves"
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
                  padContent={false}
                  paneTitle={<FormattedMessage id="ui-courses.filters.reserves" />}
                  paneSub={this.renderResultsPaneSubtitle(source)}
                >
                  <MultiColumnList
                    autosize
                    visibleColumns={[
                      'courseName',
                      'title',
                      'barcode',
                      'status',
                      'permanentLocation',
                      'temporaryLocation',
                    ]}
                    columnWidths={{
                      courseName: 130,
                      title: 300,
                      barcode: 120,
                      status: 100,
                      permanentLocation: 180,
                      temporaryLocation: 180,
                    }}
                    columnMapping={{
                      courseName: <FormattedMessage id="ui-courses.column.courseName" />,
                      title: <FormattedMessage id="ui-courses.column.title" />,
                      barcode: <FormattedMessage id="ui-courses.column.barcode" />,
                      status: <FormattedMessage id="ui-courses.column.status" />,
                      permanentLocation: <FormattedMessage id="ui-courses.column.permanentLocation" />,
                      temporaryLocation: <FormattedMessage id="ui-courses.column.temporaryLocation" />,
                    }}
                    formatter={{
                      courseName: () => '(XXX NYI)',
                      title: r => get(r, 'copiedItem.title'),
                      barcode: r => get(r, 'copiedItem.barcode'),
                      status: r => get(r, 'processingStatusObject.name'),
                      permanentLocation: r => get(r, 'copiedItem.permanentLocationObject.name'),
                      temporaryLocation: r => get(r, 'copiedItem.temporaryLocationObject.name'),
                    }}
                    contentData={reservesData.reserves}
                    id="list-reserves"
                    isEmptyMessage={this.renderIsEmptyMessage(query, source)}
                    onHeaderClick={onSort}
                    onNeedMoreData={onNeedMoreData}
                    onRowClick={this.onRowClick}
                    sortDirection={sortOrder.startsWith('-') ? 'descending' : 'ascending'}
                    sortOrder={sortOrder.replace(/^-/, '').replace(/,.*/, '')}
                    totalCount={count}
                    virtualize
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

export default withRouter(Reserves);
