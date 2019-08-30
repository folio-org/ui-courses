import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import { Field, reduxForm } from 'redux-form';
import { ControlledVocab } from '@folio/stripes/smart-components';
import { withStripes } from '@folio/stripes/core';
import { Datepicker } from '@folio/stripes/components';

const fieldComponents = {
  'expirationDate': ({ fieldProps }) => (
    <Field
      {...fieldProps}
      component={Datepicker}
      marginBottom0
      fullWidth
    />
  )
};

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
        baseUrl="users"
        records="users"
        label={intl.formatMessage({ id: 'ui-courses.objectName.schedules' })}
        labelSingular={intl.formatMessage({ id: 'ui-courses.objectName.schedule' })}
        objectLabel="Entries"
        visibleFields={['username', 'expirationDate']}
        fieldComponents={fieldComponents}
        columnMapping={{
          name: intl.formatMessage({ id: 'ui-courses.headings.name' }),
          startDate: intl.formatMessage({ id: 'ui-courses.headings.startDate' }),
          endDate: intl.formatMessage({ id: 'ui-courses.headings.endDate' }),
        }}
        id="schedules"
        sortby="username"
        hiddenFields={['lastUpdated', 'numberOfObjects']}
      />
    );
  }
}

export default reduxForm({
  form: 'course-reserves-schedules'
})(injectIntl(withStripes(ScheduleSettings)));
