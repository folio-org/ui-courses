import React from 'react';
import PropTypes from 'prop-types';
import { Paneset } from '@folio/stripes/components';

class FullScreenRoute extends React.Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
  };

  render() {
    return (
      <Paneset>
        { this.props.children }
      </Paneset>
    );
  }
}

export default FullScreenRoute;
