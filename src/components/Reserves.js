import React, { createRef } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import {
  FormattedMessage,
  injectIntl,
} from 'react-intl';
import get from 'lodash/get';
import {
  AppIcon,
  withStripes,
} from '@folio/stripes/core';

import {
  Paneset,
  Pane,
  PaneMenu,
  MultiColumnList,
  TextLink
} from '@folio/stripes/components';

import {
  SearchAndSortQuery,
  SearchAndSortNoResultsMessage,
  ExpandFilterPaneButton as FilterPaneToggle,
  ColumnManager,
} from '@folio/stripes/smart-components';

import ReservesSearchPane from './ReservesSearchPane';

const VISIBLE_COLUMNS_STORAGE_KEY = 'reserves-visible-columns';
const NON_TOGGLEABLE_COLUMNS = ['title'];

class Reserves extends React.Component {
  static propTypes = {
    location: PropTypes.shape({
      search: PropTypes.string.isRequired,
    }).isRequired,
    match: PropTypes.shape({
      path: PropTypes.string.isRequired,
    }).isRequired,
    intl: PropTypes.object.isRequired,
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
    stripes: PropTypes.shape({
      hasPerm: PropTypes.func.isRequired,
    }).isRequired,
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
      recordsArePending: props.source?.pending() ?? true,
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

  getRowURL(row) {
    const {
      match: { path },
      location: { search },
    } = this.props;

    return `${path}/${row.courseListingId}/0/${row.id}/${row.itemId}/edit${search}`;
  }

  getColumnMapping = () => {
    const { intl } = this.props;

    return {
      title: intl.formatMessage({ id: 'ui-courses.column.title' }),
      barcode: intl.formatMessage({ id: 'ui-courses.column.barcode' }),
      status: intl.formatMessage({ id: 'ui-courses.column.processingStatus' }),
      permanentLocation: intl.formatMessage({ id: 'ui-courses.column.permanentLocation' }),
      temporaryLocation: intl.formatMessage({ id: 'ui-courses.column.temporaryLocation' }),
    };
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

    return (
      filterPaneIsVisible ?
        null
        :
        <PaneMenu>
          <FilterPaneToggle
            filterCount={filterCount}
            onClick={this.toggleFilterPane}
          />
        </PaneMenu>
    );
  }

  renderResultsPaneSubtitle = (source) => {
    if (source && source.loaded()) {
      const count = source.totalCount();
      return <FormattedMessage
        id="stripes-smart-components.searchResultsCountHeader"
        values={{ count }}
      />;
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
      stripes,
    } = this.props;

    const columnMapping = this.getColumnMapping();

    const count = source ? source.totalCount() : 0;
    const sortOrder = query.sort || '';

    const columnWidths = {
      title: 300,
      barcode: 120,
      status: 100,
      permanentLocation: 180,
      temporaryLocation: 180,
    };

    const resultsFormatter = {
      title: r => <TextLink to={stripes.hasPerm('course-reserves-storage.reserves.item.put') ? this.getRowURL(r) : undefined}>{get(r, 'copiedItem.title')}</TextLink>,
      barcode: r => get(r, 'copiedItem.barcode'),
      status: r => get(r, 'processingStatusObject.name') || r.processingStatusId,
      permanentLocation: r => get(r, 'copiedItem.permanentLocationObject.name') || r.copiedItem.permanentLocationId,
      temporaryLocation: r => get(r, 'copiedItem.temporaryLocationObject.name') || r.copiedItem.temporaryLocationId,
    };

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
                <ColumnManager
                  id={VISIBLE_COLUMNS_STORAGE_KEY}
                  columnMapping={columnMapping}
                  excludeKeys={NON_TOGGLEABLE_COLUMNS}
                >
                  {({ renderColumnsMenu, visibleColumns }) => (
                    <Pane
                      appIcon={<AppIcon app="courses" />}
                      defaultWidth="fill"
                      firstMenu={this.renderResultsFirstMenu(activeFilters)}
                      actionMenu={() => renderColumnsMenu}
                      padContent={false}
                      paneTitle={<FormattedMessage id="ui-courses.filters.reserves" />}
                      paneTitleRef={this.resultsPaneTitleRef}
                      paneSub={this.renderResultsPaneSubtitle(source)}
                    >
                      <MultiColumnList
                        autosize
                        visibleColumns={visibleColumns}
                        columnWidths={columnWidths}
                        columnMapping={columnMapping}
                        formatter={resultsFormatter}
                        contentData={data.reserves}
                        id="list-reserves"
                        interactive={stripes.hasPerm('course-reserves-storage.reserves.item.put')}
                        isEmptyMessage={this.renderIsEmptyMessage(query, source)}
                        onHeaderClick={onSort}
                        onNeedMoreData={onNeedMoreData}
                        sortDirection={sortOrder.startsWith('-') ? 'descending' : 'ascending'}
                        sortOrder={sortOrder.replace(/^-/, '').replace(/,.*/, '')}
                        totalCount={count}
                        virtualize
                      />
                    </Pane>
                  )}
                </ColumnManager>

                { children }

              </Paneset>
            );
          }
        }
      </SearchAndSortQuery>
    );
  }
}

export default withStripes(withRouter(injectIntl(Reserves)));
