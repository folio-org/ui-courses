import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import { ControlledVocab } from '@folio/stripes/smart-components';
import { withStripes } from '@folio/stripes/core';

class RoleSettings extends React.Component {
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
        baseUrl="coursereserves/roles"
        records="roles"
        label={intl.formatMessage({ id: 'ui-courses.objectName.roles' })}
        objectLabel={intl.formatMessage({ id: 'ui-courses.settings.objectLabel' })}
        translations={{
          cannotDeleteTermHeader: "ui-courses.cv.patronGroup.cannotDeleteTermHeader",
          cannotDeleteTermMessage: "ui-courses.cv.patronGroup.cannotDeleteTermMessage",
          deleteEntry: "ui-courses.cv.patronGroup.deleteEntry",
          termDeleted: "ui-courses.cv.patronGroup.termDeleted",
          termWillBeDeleted: "ui-courses.cv.patronGroup.termWillBeDeleted",
        }}
        visibleFields={['name', 'description']}
        columnMapping={{
          name: intl.formatMessage({ id: 'ui-courses.headings.name' }),
          description: intl.formatMessage({ id: 'ui-courses.headings.description' }),
        }}
        id="roles"
        sortby="name"
        hiddenFields={['lastUpdated', 'numberOfObjects']}
      />
    );
  }
}

export default injectIntl(withStripes(RoleSettings));
