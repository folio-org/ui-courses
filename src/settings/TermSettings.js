import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import { Field } from 'react-final-form';
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
    usePortal
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
      hasPerm: PropTypes.func.isRequired,
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

  gmtDate(date) {
    return this.props.intl.formatDate(date, { timeZone: 'UTC' });
  }

  render() {
    const { stripes, intl } = this.props;

    return (
      <this.connectedControlledVocab
        formType="final-form"
        stripes={stripes}
        baseUrl="coursereserves/terms"
        records="terms"
        label={intl.formatMessage({ id: 'ui-courses.objectName.terms' })}
        translations={
          {
            cannotDeleteTermHeader: 'ui-courses.cv.cannotDeleteTermHeader',
            cannotDeleteTermMessage: 'ui-courses.cv.cannotDeleteTermMessage',
            deleteEntry: 'ui-courses.cv.deleteEntry',
            termDeleted: 'ui-courses.cv.termDeleted',
            termWillBeDeleted: 'ui-courses.cv.termWillBeDeleted',
          }
        }
        objectLabel={intl.formatMessage({ id: 'ui-courses.settings.objectLabel' })}
        visibleFields={['name', 'startDate', 'endDate']}
        fieldComponents={fieldComponents}
        columnMapping={{
          name: intl.formatMessage({ id: 'ui-courses.headings.name' }),
          startDate: intl.formatMessage({ id: 'ui-courses.headings.startDate' }),
          endDate: intl.formatMessage({ id: 'ui-courses.headings.endDate' }),
        }}
        formatter={{
          startDate: r => this.gmtDate(r.startDate),
          endDate: r => this.gmtDate(r.endDate),
        }}
        id="terms"
        sortby="name"
        hiddenFields={['lastUpdated', 'numberOfObjects']}
        canCreate={stripes.hasPerm('course-reserves-storage.terms.item.post')}
        actionSuppressor={{
          edit: () => !stripes.hasPerm('course-reserves-storage.terms.item.put'),
          'delete': () => !stripes.hasPerm('course-reserves-storage.terms.item.delete'),
        }}
      />
    );
  }
}

export default injectIntl(withStripes(TermSettings));
