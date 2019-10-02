import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import { ControlledVocab } from '@folio/stripes/smart-components';
import { withStripes } from '@folio/stripes/core';

class CopyrightStatusSettings extends React.Component {
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
        baseUrl="coursereserves/copyrightstatuses"
        records="copyrightStatuses"
        label={intl.formatMessage({ id: 'ui-courses.objectName.copyrightstatuses' })}
        labelSingular={intl.formatMessage({ id: 'ui-courses.objectName.copyrightstatus' })}
        objectLabel="Entries"
        visibleFields={['name', 'description']}
        columnMapping={{
          name: intl.formatMessage({ id: 'ui-courses.headings.name' }),
          description: intl.formatMessage({ id: 'ui-courses.headings.description' }),
        }}
        id="copyrightstatuses"
        sortby="name"
        hiddenFields={['lastUpdated', 'numberOfObjects']}
      />
    );
  }
}

export default injectIntl(withStripes(CopyrightStatusSettings));
