import React from 'react';
import { FormattedMessage } from 'react-intl';

import { stripesConnect } from '@folio/stripes/core';
import { ConfigManager as UnconnectedConfigManager } from '@folio/stripes/smart-components';

import DisplaySettingsForm from './DisplaySettingsForm';

const ConfigManager = stripesConnect(UnconnectedConfigManager);

const DisplaySettings = () => (
  <ConfigManager
    configFormComponent={DisplaySettingsForm}
    configName="display"
    label={<FormattedMessage id="ui-courses.settings.displaySettings" />}
    moduleName="COURSES"
    onBeforeSave={JSON.stringify}
  />
);

export default DisplaySettings;
