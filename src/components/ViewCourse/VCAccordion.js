import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Accordion } from '@folio/stripes/components';
import omit from 'lodash/omit';

class VCAccordion extends React.Component {
  static propTypes = {
    action: PropTypes.string,
    id: PropTypes.string.isRequired,
    children: PropTypes.object.isRequired,
  };

  static defaultProps = { action: 'view' };

  render() {
    const { action, id, children } = this.props;
    const otherProps = omit(this.props, ['id', 'children']);

    return (
      <Accordion
        id={`${action}-course-${id}`}
        label={<FormattedMessage id={`ui-courses.accordion.${id}`} />}
        displayWhenClosed={<FormattedMessage id={`ui-courses.accordion.${id}.help`} />}
        {...otherProps}
      >
        {children}
      </Accordion>
    );
  }
}

export default VCAccordion;
