import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { TextField, Button } from '@folio/stripes/components';
import { stripesConnect } from '@folio/stripes/core';


class AddReserve extends React.Component {
  static propTypes = {
    courseListingId: PropTypes.string.isRequired,
    stripes: PropTypes.shape({
      okapi: PropTypes.shape({
        url: PropTypes.string.isRequired,
        tenant: PropTypes.string.isRequired,
        token: PropTypes.string.isRequired,
      }).isRequired,
    }),
    mutator: PropTypes.shape({
      reserves: PropTypes.shape({
        POST: PropTypes.func.isRequired,
      }).isRequired,
    }),
  };

  static manifest = {
    reserves: {
      type: 'okapi',
      path: 'coursereserves/courselistings/!{courseListingId}/reserves',
      fetch: false,
      shouldRefresh: () => false,
    },
  };

  addItem(e, courseListingId) {
    const barcode = document.getElementById('add-item-barcode').value;

    const { url, tenant, token } = this.props.stripes.okapi;
    fetch(`${url}/item-storage/items?query=barcode=${barcode}`, {
      headers: {
        'X-Okapi-Tenant': tenant,
        'X-Okapi-Token': token,
        'Accept': 'application/json',
      },
    }).catch(error => {
      console.log(`could not fetch item: ${error}`);
    }).then(res => {
      if (res.status !== 200) {
        console.log(`could not find item: HTTP status ${res.status} (${res.statusText})`);
        return;
      }
      res.json().catch(error => {
        console.log('could not parse result as JSON:', error);
      }).then(json => {
        const count = json.totalRecords;
        if (count === 0) {
          console.log(`could not find item with barcode '${barcode}'`);
          return;
        }
        if (count > 1) {
          console.warn(`found ${count} items with barcode '${barcode}': using first`);
        }
        const itemId = json.items[0].id;
        this.props.mutator.reserves.POST({ courseListingId, itemId })
          .then(rec => console.log(' -> ok:', rec))
          .catch(exception => console.log(' -> fail:', exception));
      });
    });
  }

  render() {
    return (
      <React.Fragment>
        <hr />
        <form id="form-course-item">
          <TextField autoFocus label="Enter or scan barcode" id="add-item-barcode" />
          <FormattedMessage id="ui-courses.addItem">
            {ariaLabel => (
              <Button
                aria-label={ariaLabel}
                buttonStyle="primary"
                id="clickable-add-item"
                onClick={e => this.addItem(e, this.props.courseListingId)}
                marginBottom0
              >
                <FormattedMessage id="ui-courses.button.addItem" />
              </Button>
            )}
          </FormattedMessage>
        </form>
      </React.Fragment>
    );
  }
}


export default stripesConnect(AddReserve);
