import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Button, Icon } from '@folio/stripes/components';
import { CalloutContext, Pluggable, stripesConnect } from '@folio/stripes/core';

/*
  This component relies entirely on the create-inventory-records plugin existing and nothing
  will be rendered by `Pluggable` if it doesn't. The unit tests for this app are written such that
  the thing being tested is a stripes-cli-served bundle of _just_ this app - there are no plugins!
  As a result, any of the code inside of Pluggable (onClose, renderTrigger, etc) can't be executed
  during tests so we ignore it from code-coverage calculations. This is suboptimal, but barring
  significant changes to the testing framework (just go on ahead and tell Mike Taylor to consider
  that) the best option we have for maintaining good enough coverage numbers is ignoring the block...
  ...
  ...this all smacks of Goodhart's Law don't it?
*/
/* istanbul ignore next */
const AddFastReserve = ({
  courseListingId,
  mutator,
}) => {
  const callout = useContext(CalloutContext);

  return (
    <Pluggable
      id="clickable-create-fast-add-inventory-records"
      onClose={data => {
        if (!data) return;

        const { itemRecord } = data;
        mutator.reserves.POST({ courseListingId, itemId: itemRecord.id })
          .then(() => {
            callout.sendCallout({ message: <FormattedMessage id="ui-courses.addItem.addedItem" values={{ title: itemRecord.title }} /> });
          }).catch(exception => {
            exception.text().then(text => {
              callout.sendCallout('error', <FormattedMessage id="ui-courses.addItem.failure" values={{ message: text }} />);
            });
          });
      }}
      renderTrigger={({ onClick }) => (
        <Button onClick={onClick}>
          <Icon icon="lightning">
            <FormattedMessage id="ui-courses.addFastAddItem.title" />
          </Icon>
        </Button>
      )}
      type="create-inventory-records"
    />
  );
};

AddFastReserve.propTypes = {
  courseListingId: PropTypes.string,
  mutator: PropTypes.shape({
    reserves: PropTypes.shape({
      POST: PropTypes.func.isRequired,
    }).isRequired,
  }),
};

AddFastReserve.manifest = {
  reserves: {
    type: 'okapi',
    path: 'coursereserves/courselistings/!{courseListingId}/reserves',
    fetch: false,
    shouldRefresh: () => false,
    throwErrors: false,
  },
};

export default stripesConnect(AddFastReserve);
