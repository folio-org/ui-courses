import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import { Field, reduxForm } from 'redux-form';
import { ControlledVocab } from '@folio/stripes/smart-components';
import { withStripes } from '@folio/stripes/core';
import { Datepicker } from '@folio/stripes/components';

// Somehow, ESLint has got it into its head that fieldProps is a named prop passed to a component
// eslint-disable-next-line react/prop-types
const dateFieldType = ({ fieldProps }) => (
  <Field
    {...fieldProps}
    component={Datepicker}
    marginBottom0
    fullWidth
  />
);

const fieldComponents = {
  'startDate': dateFieldType,
  'endDate': dateFieldType,
};

class TermSettings extends React.Component {
  static propTypes = {
    stripes: PropTypes.shape({
      connect: PropTypes.func.isRequired,
    }).isRequired,
    intl: PropTypes.shape({
      formatMessage: PropTypes.func.isRequired,
      formatDate: PropTypes.func.isRequired,
    }).isRequired,
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
        baseUrl="coursereserves/terms"
        records="terms"
        label={intl.formatMessage({ id: 'ui-courses.objectName.terms' })}
        labelSingular={intl.formatMessage({ id: 'ui-courses.objectName.term' })}
        objectLabel={intl.formatMessage({ id: 'ui-courses.settings.objectLabel' })}
        visibleFields={['name', 'startDate', 'endDate']}
        fieldComponents={fieldComponents}
        columnMapping={{
          name: intl.formatMessage({ id: 'ui-courses.headings.name' }),
          startDate: intl.formatMessage({ id: 'ui-courses.headings.startDate' }),
          endDate: intl.formatMessage({ id: 'ui-courses.headings.endDate' }),
        }}
        formatter={{
          startDate: r => intl.formatDate(r.startDate),
          endDate: r => intl.formatDate(r.endDate),
        }}
        id="terms"
        sortby="name"
        hiddenFields={['lastUpdated', 'numberOfObjects']}
      />
    );
  }
}

export default reduxForm({
  form: 'course-reserves-terms'
})(injectIntl(withStripes(TermSettings)));
