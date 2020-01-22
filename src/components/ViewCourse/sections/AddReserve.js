import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { TextField, Button, Callout } from '@folio/stripes/components';
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
    itemByBarcode: {
      type: 'okapi',
      fetch: false,
      path: 'item-storage/items',
      accumulate: true // This is the misnamed provide-a-GET-mutator property
    }
  };

  constructor() {
    super();
    this.callout = React.createRef();
  }

  showCallout(type, message) {
    this.callout.current.sendCallout({ type, message });
  }

  addItem(e, courseListingId) {
    const barcode = document.getElementById('add-item-barcode').value;
    const { mutator } = this.props;

    mutator.itemByBarcode.GET({ params: { query: `barcode="${barcode}"` } }).then(json => {
      const count = json.totalRecords;
      if (count === 0) {
        this.showCallout('error', `no item with barcode '${barcode}'`);
        return;
      }
      if (count > 1) {
        this.showCallout('error', `${count} items with barcode '${barcode}': using first`);
      }
      const itemId = json.items[0].id;
      this.props.mutator.reserves.POST({ courseListingId, itemId })
        .then(rec => {
          // XXX We never see this callout due to the re-render. Oh well.
          this.showCallout('success', `Added item "${rec.copiedItem.title}"`);
        })
        .catch(exception => {
          this.showCallout('error', `Failed to add item: ${exception}`);
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
        <Callout ref={this.callout} />
      </React.Fragment>
    );
  }
}


export default stripesConnect(AddReserve);
