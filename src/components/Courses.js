import React, { createRef } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import {
  FormattedMessage,
  FormattedDate,
  injectIntl,
} from 'react-intl';
import get from 'lodash/get';
import {
  AppIcon,
  IfPermission
} from '@folio/stripes/core';

import {
  Button,
  Icon,
  Paneset,
  Pane,
  PaneMenu,
  MultiColumnList,
  NoValue,
  MenuSection,
} from '@folio/stripes/components';

import {
  SearchAndSortQuery,
  SearchAndSortNoResultsMessage,
  SearchAndSortSearchButton as FilterPaneToggle,
  ColumnManager,
} from '@folio/stripes/smart-components';

import packageInfo from '../../package';
import CoursesSearchPane from './CoursesSearchPane';

const VISIBLE_COLUMNS_STORAGE_KEY = 'courses-visible-columns';
const NON_TOGGLEABLE_COLUMNS = ['name'];

// Returns a date object corresponding with the date string in format YYYY-MM-DD'
function makeDate(s) {
  const a = s.split('T')[0].split('-');
  const date = new Date(a[0], a[1] - 1, a[2]); // month is zero-based!
  return date;
}

function calculateStatus(termObject) {
  if (!termObject) return <NoValue />;
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
    intl: PropTypes.object.isRequired,
    children: PropTypes.object,
    data: PropTypes.shape({
      courses: PropTypes.arrayOf(
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
    this.props.history.push(`/cr/courses/${row.id}${this.props.location.search}`);
  }

  getColumnMapping = () => {
    const { intl } = this.props;

    return {
      name: intl.formatMessage({ id: 'ui-courses.column.name' }),
      courseNumber: intl.formatMessage({ id: 'ui-courses.column.courseNumber' }),
      sectionName: intl.formatMessage({ id: 'ui-courses.column.sectionName' }),
      registrarId: intl.formatMessage({ id: 'ui-courses.column.registrarId' }),
      department: intl.formatMessage({ id: 'ui-courses.column.department' }),
      startDate: intl.formatMessage({ id: 'ui-courses.column.startDate' }),
      endDate: intl.formatMessage({ id: 'ui-courses.column.endDate' }),
      instructor: intl.formatMessage({ id: 'ui-courses.column.instructor' }),
      status: intl.formatMessage({ id: 'ui-courses.column.status' }),
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

  getActionMenu = renderColumnsMenu => () => {
    const { intl } = this.props;

    return (
      <>
        <MenuSection
          label={intl.formatMessage({ id: 'ui-courses.actions' })}
          id="actions-menu-section"
        >
          <IfPermission perm="course-reserves-storage.courses.item.post">
            <PaneMenu>
              <FormattedMessage id="stripes-smart-components.addNew">
                {ariaLabel => (
                  <Button
                    aria-label={ariaLabel}
                    buttonStyle="dropdownItem"
                    id="clickable-new-course"
                    marginBottom0
                    to={`${packageInfo.stripes.route}/courses/create${this.props.location.search}`}
                  >
                    <Icon icon="plus-sign">
                      <FormattedMessage id="stripes-smart-components.new" />
                    </Icon>
                  </Button>
                )}
              </FormattedMessage>
            </PaneMenu>
          </IfPermission>
        </MenuSection>
        {renderColumnsMenu}
      </>
    );
  };

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

    const columnMapping = this.getColumnMapping();

    const count = source ? source.totalCount() : 0;
    const sortOrder = query.sort || '';

    const columnWidths = {
      name: 200,
      courseNumber: 110,
      sectionName: 100,
      registrarId: 110,
      department: 120,
      startDate: 100,
      endDate: 100,
      instructor: 180,
      status: 100,
    };

    const resultsFormatter = {
      registrarId: r => get(r, 'courseListingObject.registrarId'),
      department: r => get(r, 'departmentObject.name'),
      startDate: r => <FormattedDate value={get(r, 'courseListingObject.termObject.startDate')} />,
      endDate: r => <FormattedDate value={get(r, 'courseListingObject.termObject.endDate')} />,
      instructor: r => get(r, 'courseListingObject.instructorObjects', []).map(i => i.name).join('; '),
      status: r => calculateStatus(get(r, 'courseListingObject.termObject')),
    };

    const nonInteractiveHeaders = [
      'registrarId',
      'department',
      'startDate',
      'endDate',
      'instructor',
      'status'
    ];

    return (
      <SearchAndSortQuery
        initialSearchState={{ query: '' }}
        initialSortState={{ sort: 'name' }}
      >
        {
          (sasqParams) => {
            const { onSort, activeFilters } = sasqParams;
            return (
              <Paneset id="courses-paneset">
                {this.state.filterPaneIsVisible && (
                  <CoursesSearchPane
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
                      actionMenu={this.getActionMenu(renderColumnsMenu)}
                      padContent={false}
                      paneTitle={<FormattedMessage id="ui-courses.filters.courses" />}
                      paneTitleRef={this.resultsPaneTitleRef}
                      paneSub={this.renderResultsPaneSubtitle(source)}
                    >
                      <MultiColumnList
                        id="list-courses"
                        visibleColumns={visibleColumns}
                        columnWidths={columnWidths}
                        columnMapping={columnMapping}
                        formatter={resultsFormatter}
                        contentData={data.courses}
                        isEmptyMessage={this.renderIsEmptyMessage(query, source)}
                        nonInteractiveHeaders={nonInteractiveHeaders}
                        onHeaderClick={onSort}
                        onNeedMoreData={onNeedMoreData}
                        onRowClick={this.onRowClick}
                        sortDirection={sortOrder.startsWith('-') ? 'descending' : 'ascending'}
                        sortOrder={sortOrder.replace(/^-/, '').replace(/,.*/, '')}
                        totalCount={count}
                        autosize
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

export default withRouter(injectIntl(Courses));
