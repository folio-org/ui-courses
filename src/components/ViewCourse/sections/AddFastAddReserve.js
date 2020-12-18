import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Button, Icon, Tooltip } from '@folio/stripes/components';
import { CalloutContext, Pluggable, stripesConnect } from '@folio/stripes/core';

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
        <Tooltip text={<FormattedMessage id="ui-courses.addFastAddItem.tooltip" />}>
          {({ ref, ariaIds }) => (
            <Button
              aria-labelledby={ariaIds.text}
              onClick={onClick}
              ref={ref}
            >
              <Icon icon="lightning">
                <FormattedMessage id="ui-courses.addFastAddItem.title" />
              </Icon>
            </Button>
          )}
        </Tooltip>
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
