import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { KeyValue } from '@folio/stripes/components';
import omit from 'lodash/omit';

class VCKeyValue extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
  };

  render() {
    const { id } = this.props;
    const otherProps = omit(this.props, ['id']);

    return (
      <KeyValue label={<FormattedMessage id={`ui-courses.field.${id}`} />} {...otherProps} />
    );
  }
}

export default VCKeyValue;
