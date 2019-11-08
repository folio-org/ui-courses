import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Accordion } from '@folio/stripes/components';
import omit from 'lodash/omit';

class VCAccordion extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.object.isRequired,
  };

  render() {
    const { id, children } = this.props;
    const otherProps = omit(this.props, ['id', 'children']);

    return (
      <Accordion
        id={`view-course-${id}`}
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
