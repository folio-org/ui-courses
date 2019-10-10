import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import { ControlledVocab } from '@folio/stripes/smart-components';
import { withStripes } from '@folio/stripes/core';

class TEMPORARYCourseSettings extends React.Component {
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
        baseUrl="coursereserves/courses"
        records="courses"
        label="Courses"
        labelSingular="Course"
        objectLabel="Entries"
        visibleFields={['name', 'courseListingId', 'departmentId']}
        columnMapping={{
          name: intl.formatMessage({ id: 'ui-courses.headings.name' }),
          courseListingId: 'CLID',
          departmentId: 'DID',
        }}
        id="courses"
        sortby="name"
        hiddenFields={['lastUpdated', 'numberOfObjects']}
      />
    );
  }
}

export default injectIntl(withStripes(TEMPORARYCourseSettings));
