import React from 'react';
import PropTypes from 'prop-types';
import ky from 'ky';
import { withStripes } from '@folio/stripes/core';

const withOkapiKy = (WrappedComponent) => {
  class HOC extends React.Component {
    static propTypes = {
      stripes: PropTypes.shape({
        okapi: PropTypes.shape({
          tenant: PropTypes.string.isRequired,
          token: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    };

    constructor(props) {
      super();
      const { tenant, token, url } = props.stripes.okapi;
      this.okapiKy = ky.create({
        prefixUrl: url,
        hooks: {
          beforeRequest: [
            (request, options) => {
              options.credentials = 'include';
              request.headers.set('X-Okapi-Tenant', tenant);
              if (token) request.headers.set('X-Okapi-Token', token);
            }
          ]
        }
      });
    }

    render() {
      return <WrappedComponent {...this.props} okapiKy={this.okapiKy} />;
    }
  }

  return withStripes(HOC);
};

export default withOkapiKy;
