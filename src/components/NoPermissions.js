import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Layout } from '@folio/stripes/components';

export default () => (
  <Layout className="textCentered">
    <h2><FormattedMessage id="stripes-smart-components.permissionError" /></h2>
    <p><FormattedMessage id="stripes-smart-components.permissionsDoNotAllowAccess" /></p>
  </Layout>
);
