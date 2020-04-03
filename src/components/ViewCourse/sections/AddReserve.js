import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { TextField, Button, Callout } from '@folio/stripes/components';
import { stripesConnect } from '@folio/stripes/core';


class AddReserve extends React.Component {
  static propTypes = {
    courseListingId: PropTypes.string.isRequired,
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
      throwErrors: false,
    },
  };

  constructor() {
    super();
    this.callout = React.createRef();
  }

  showCallout(type, message) {
    this.callout.current.sendCallout({ type, message });
  }

  addItem(e, courseListingId) {
    e.preventDefault();
    const barcode = document.getElementById('add-item-barcode').value;
    if (!barcode) {
      this.showCallout('error', 'Please enter a barcode before selecting "Add item"');
      return;
    }

    this.props.mutator.reserves.POST({ courseListingId, copiedItem: { barcode } })
      .then(rec => {
        // XXX We never see this callout due to the re-render. Oh well.
        this.showCallout('success', `Added item "${rec.copiedItem.title}"`);
      })
      .catch(exception => {
        exception.text().then(text => {
          const message = text.includes('value already exists in table coursereserves_reserves') ?
            `Duplicate barcode ${barcode}: this item is already on reserve for this course` :
            `Failed to add item ${barcode}: ${text}`;
          this.showCallout('error', message);
        });
      });
  }

  render() {
    return (
      <React.Fragment>
        <hr />
        <form id="form-course-item" onSubmit={e => this.addItem(e, this.props.courseListingId)}>
          <TextField label="Enter or scan barcode" id="add-item-barcode" />
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
