import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { TextField, Button } from '@folio/stripes/components';
import { stripesConnect, CalloutContext } from '@folio/stripes/core';


class AddReserve extends React.Component {
  static contextType = CalloutContext; // Too Much Magic

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

  showCallout(type, message) {
    this.context.sendCallout({ type, message });
  }

  addItem(e, courseListingId) {
    e.preventDefault();
    const barcode = document.getElementById('add-item-barcode').value;
    if (!barcode) {
      this.showCallout('error', <FormattedMessage id="ui-courses.addItem.missingBarcode" />);
      return;
    }

    this.props.mutator.reserves.POST({ courseListingId, copiedItem: { barcode } })
      .then(rec => {
        const values = { title: rec.copiedItem.title };
        this.showCallout('success', <FormattedMessage id="ui-courses.addItem.addedItem" values={values} />);
      })
      .catch(exception => {
        exception.text().then(text => {
          const isDuplicate = (text.includes('value already exists in table coursereserves_reserves') ||
                               text.includes('is not unique for courseListing'));
          const message = isDuplicate ?
            <FormattedMessage id="ui-courses.addItem.duplicateItem" values={{ barcode }} /> :
            <FormattedMessage id="ui-courses.addItem.failure" values={{ barcode, message: text }} />;
          this.showCallout('error', message);
        });
      });
  }

  render() {
    return (
      <>
        <form id="form-course-item" onSubmit={e => this.addItem(e, this.props.courseListingId)}>
          <TextField label={<FormattedMessage id="ui-courses.addItem.enterBarcode" />} id="add-item-barcode" />
          <FormattedMessage id="ui-courses.addItem">
            {ariaLabel => (
              <Button
                aria-label={ariaLabel}
                id="clickable-add-item"
                onClick={e => this.addItem(e, this.props.courseListingId)}
              >
                <FormattedMessage id="ui-courses.button.addItem" />
              </Button>
            )}
          </FormattedMessage>
        </form>
      </>
    );
  }
}


export default stripesConnect(AddReserve);
