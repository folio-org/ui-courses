import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Layout, Pane, Paneset, Spinner } from '@folio/stripes/components';

const LoadingPaneSet = (props) => (
  <Paneset>
    <Pane
      dismissible
      defaultWidth="100%"
      id="pane-course-form"
      onClose={props.onClose}
      paneTitle={<FormattedMessage id="ui-courses.loading" />}
    >
      <Layout className="marginTop1">
        <Spinner />
      </Layout>
    </Pane>
  </Paneset>
);

LoadingPaneSet.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default LoadingPaneSet;
