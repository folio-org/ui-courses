import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import { ControlledVocab } from '@folio/stripes/smart-components';
import { withStripes } from '@folio/stripes/core';

class DepartmentSettings extends React.Component {
  static propTypes = {
    stripes: PropTypes.shape({
      connect: PropTypes.func.isRequired,
      hasPerm: PropTypes.func.isRequired,
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
        baseUrl="coursereserves/departments"
        records="departments"
        label={intl.formatMessage({ id: 'ui-courses.objectName.departments' })}
        labelSingular={intl.formatMessage({ id: 'ui-courses.objectName.department' })}
        objectLabel={intl.formatMessage({ id: 'ui-courses.settings.objectLabel' })}
        visibleFields={['name', 'description']}
        columnMapping={{
          name: intl.formatMessage({ id: 'ui-courses.headings.name' }),
          description: intl.formatMessage({ id: 'ui-courses.headings.description' }),
        }}
        id="departments"
        sortby="name"
        hiddenFields={['lastUpdated', 'numberOfObjects']}
        actionSuppressor={{
          edit: () => !stripes.hasPerm('course-reserves-storage.departments.item.put'),
          'delete': () => !stripes.hasPerm('course-reserves-storage.departments.item.delete'),
        }}
      />
    );
  }
}

export default injectIntl(withStripes(DepartmentSettings));
