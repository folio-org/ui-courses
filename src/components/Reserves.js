import React, { createRef } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { FormattedMessage } from 'react-intl';
import get from 'lodash/get';
import { AppIcon } from '@folio/stripes/core';

import {
  Paneset,
  Pane,
  PaneMenu,
  MultiColumnList,
} from '@folio/stripes/components';

import {
  SearchAndSortQuery,
  SearchAndSortNoResultsMessage,
  SearchAndSortSearchButton as FilterPaneToggle,
} from '@folio/stripes/smart-components';

import ReservesSearchPane from './ReservesSearchPane';


class Reserves extends React.Component {
  static propTypes = {
    location: PropTypes.shape({
      search: PropTypes.string.isRequired,
    }).isRequired,
    children: PropTypes.object,
    data: PropTypes.shape({
      reserves: PropTypes.arrayOf(
        PropTypes.object,
      ).isRequired,
      options: PropTypes.object.isRequired,
    }).isRequired,
    onNeedMoreData: PropTypes.func.isRequired,
    query: PropTypes.object.isRequired,
    source: PropTypes.shape({
      loaded: PropTypes.func.isRequired,
      pending: PropTypes.func.isRequired,
      totalCount: PropTypes.func.isRequired,
    }),
    history: PropTypes.shape({ // provided by withRouter
      push: PropTypes.func.isRequired,
    }).isRequired,
  };

  constructor(props) {
    super(props);

    this.resultsPaneTitleRef = createRef();
  }

  state = {
    filterPaneIsVisible: true,
    recordsArePending: true,
    searchPending: false,
  }

  static getDerivedStateFromProps(props) {
    return {
      recordsArePending: props.source?.pending() ?? true
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.searchPending &&
      prevState.recordsArePending === true &&
      this.state.recordsArePending === false
    ) {
      this.onSearchComplete();
    }
  }

  handleSubmitSearch = (e, onSubmitSearch) => {
    this.setState({ searchPending: true });

    onSubmitSearch(e);
  }

  onRowClick = (e, row) => {
    this.props.history.push(`/cr/reserves/${row.courseListingId}/0/${row.id}/${row.itemId}/edit${this.props.location.search}`);
  }

  onSearchComplete = () => {
    const hasResults = !!(this.props.source?.totalCount() ?? 0);

    this.setState({ searchPending: false });

    // Focus the pane header if we have results to minimize tabbing distance
    if (hasResults && this.resultsPaneTitleRef.current) {
      this.resultsPaneTitleRef.current.focus();
    }
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
      return <FormattedMessage id="ui-courses.noSource" />;
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
      data,
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
          (sasqParams) => {
            const { onSort, activeFilters } = sasqParams;
            return (
              <Paneset id="reserves-paneset">
                {this.state.filterPaneIsVisible && (
                  <ReservesSearchPane
                    {...sasqParams}
                    onSubmitSearch={e => this.handleSubmitSearch(e, sasqParams.onSubmitSearch)}
                    source={source}
                    toggleFilterPane={this.toggleFilterPane}
                    searchField={this.searchField}
                    options={data.options}
                  />
                )}
                <Pane
                  appIcon={<AppIcon app="courses" />}
                  defaultWidth="fill"
                  firstMenu={this.renderResultsFirstMenu(activeFilters)}
                  padContent={false}
                  paneTitle={<FormattedMessage id="ui-courses.filters.reserves" />}
                  paneTitleRef={this.resultsPaneTitleRef}
                  paneSub={this.renderResultsPaneSubtitle(source)}
                >
                  <MultiColumnList
                    autosize
                    visibleColumns={[
                      'title',
                      'barcode',
                      'status',
                      'permanentLocation',
                      'temporaryLocation',
                    ]}
                    columnWidths={{
                      title: 300,
                      barcode: 120,
                      status: 100,
                      permanentLocation: 180,
                      temporaryLocation: 180,
                    }}
                    columnMapping={{
                      title: <FormattedMessage id="ui-courses.column.title" />,
                      barcode: <FormattedMessage id="ui-courses.column.barcode" />,
                      status: <FormattedMessage id="ui-courses.column.processingStatus" />,
                      permanentLocation: <FormattedMessage id="ui-courses.column.permanentLocation" />,
                      temporaryLocation: <FormattedMessage id="ui-courses.column.temporaryLocation" />,
                    }}
                    formatter={{
                      title: r => get(r, 'copiedItem.title'),
                      barcode: r => get(r, 'copiedItem.barcode'),
                      status: r => get(r, 'processingStatusObject.name') || r.processingStatusId,
                      permanentLocation: r => get(r, 'copiedItem.permanentLocationObject.name') || r.copiedItem.permanentLocationId,
                      temporaryLocation: r => get(r, 'copiedItem.temporaryLocationObject.name') || r.copiedItem.temporaryLocationId,
                    }}
                    contentData={data.reserves}
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
