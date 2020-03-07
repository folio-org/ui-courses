import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { withRouter } from 'react-router';
import get from 'lodash/get';
import { stripesConnect } from '@folio/stripes/core'; // just for resources.query

import {
  Button,
  Icon,
  Pane,
  SearchField,
} from '@folio/stripes/components';

import updateLocation from '../util/updateLocation';
// import renderFilter from '../util/renderFilter';
// import filterString2state from '../util/filterString2state';
import css from './Courses.css';
import FilterNavigation from './FilterNavigation';


// Value gets set into the `qindex` parameter of the UI URL, and used in the generated back-end query
// eslint-disable-next-line no-unused-vars
const searchableIndexes = [
  { label: 'All fields', value: '' },
  { label: 'Title', value: 'copiedItem.title' },
  { label: 'Barcode', value: 'copiedItem.barcode' },
  { label: 'Call Number', value: 'copiedItem.callNumber' },
  { label: 'Contributor', value: 'copiedItem.contributors.name' },
];


class ReservesSearchPane extends React.Component {
  static propTypes = {
    searchValue: PropTypes.shape({
      query: PropTypes.string.isRequired,
    }).isRequired,
    getSearchHandlers: PropTypes.func.isRequired,
    // getFilterHandlers: PropTypes.func.isRequired,
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
    // options: PropTypes.object.isRequired,
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
      // getFilterHandlers,
      onSubmitSearch,
      resetAll,
      source,
      toggleFilterPane,
      searchField,
      resources,
      // options,
    } = this.props;
    const searchHandlers = getSearchHandlers();
    // const filterHandlers = getFilterHandlers();

    // const filters = get(resources.query, 'filters');
    // const activeFilters = filterString2state(filters);

    return (
      <Pane
        defaultWidth="28%"
        onClose={toggleFilterPane}
        paneTitle={<FormattedMessage id="stripes-smart-components.searchAndFilter" />}
      >
        <form onSubmit={onSubmitSearch}>
          <FilterNavigation current="reserves" />
          <div className={css.searchGroupWrap}>
            <FormattedMessage id="ui-courses.searchInputLabel">
              { ariaLabel => (
                <SearchField
                  data-test-reserves-search-input
                  id="input-reserves-search"
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
    );
  }
}


export default withRouter(stripesConnect(ReservesSearchPane));
