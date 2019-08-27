import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Settings } from '@folio/stripes/smart-components';
import RoleSettings from './RoleSettings';

export default class CoursesSettings extends React.Component {
  pages = [
    {
      route: 'roles',
      label: <FormattedMessage id="ui-courses.settings.roles" />,
      component: RoleSettings,
    },
  ];

  render() {
    return (
      <Settings {...this.props} pages={this.pages} paneTitle="Courses" />
    );
  }
}
