import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import { ControlledVocab } from '@folio/stripes/smart-components';
import { withStripes } from '@folio/stripes/core';

class ScheduleSettings extends React.Component {
  static propTypes = {
    stripes: PropTypes.shape({
      connect: PropTypes.func.isRequired,
    }).isRequired,
    intl: PropTypes.shape({
      formatMessage: PropTypes.func.isRequired,
    }),
  };

  constructor(props) {
    super(props);
    this.connectedControlledVocab = props.stripes.connect(ControlledVocab);
  }

  render() {
    const { stripes, intl } = this.props;

    return (
      <this.connectedControlledVocab
        stripes={stripes}
        baseUrl="courses/schedules"
        label={intl.formatMessage({ id: 'ui-courses.objectName.schedules' })}
        labelSingular={intl.formatMessage({ id: 'ui-courses.objectName.schedule' })}
        objectLabel="Entries"
        visibleFields={['name', 'startDate', 'endDate']}
        columnMapping={{
          name: intl.formatMessage({ id: 'ui-courses.headings.name' }),
          startDate: intl.formatMessage({ id: 'ui-courses.headings.startDate' }),
          endDate: intl.formatMessage({ id: 'ui-courses.headings.endDate' }),
        }}
        id="schedules"
        sortby="name"
        hiddenFields={['lastUpdated', 'numberOfObjects']}
      />
    );
  }
}

export default injectIntl(withStripes(ScheduleSettings));

/*
   Using non-text fields in a <ControlledVocab>:

   https://github.com/folio-org/ui-inventory/blob/master/src/settings/StatisticalCodeSettings.js
   https://github.com/folio-org/ui-users/blob/master/src/settings/OwnerSettings.js#L96
   https://github.com/folio-org/ui-users/blob/master/src/settings/FeeFineSettings.js#L203
*/
