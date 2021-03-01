import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Field } from 'react-final-form';

import {
  Button,
  Checkbox,
  Layout,
  Pane,
} from '@folio/stripes/components';

import stripesFinalForm from '@folio/stripes/final-form';

const DisplaySettingsForm = ({
  handleSubmit,
  label,
  pristine,
  submitting,
}) => (
  <form id="courses-display-settings-form" onSubmit={handleSubmit}>
    <Pane
      defaultWidth="fill"
      fluidContentWidth
      id="pane-courses-settings-display"
      lastMenu={(
        <Button
          buttonStyle="primary"
          disabled={(pristine || submitting)}
          id="clickable-save-courses-display-settings"
          marginBottom0
          type="submit"
        >
          <FormattedMessage id="stripes-core.button.save" />
        </Button>
      )}
      paneTitle={label}
    >
      <Field
        component={Checkbox}
        id="duplicateCrosslistedCourses"
        label={<FormattedMessage id="ui-courses.settings.display.duplicateCrosslistedCourses" />}
        name="duplicateCrosslistedCourses"
        parse={v => !!v}
        type="checkbox"
      />
      <Layout className="padding-bottom-gutter padding-top-gutter">
        <FormattedMessage id="ui-courses.settings.display.duplicateCrosslistedCourses.description" />
      </Layout>
    </Pane>
  </form>
);

DisplaySettingsForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  label: PropTypes.node,
};

export default stripesFinalForm({
  navigationCheck: true,
  enableReinitialize: true,
  subscription: {
    values: true,
  },
})(DisplaySettingsForm);
