import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Settings } from '@folio/stripes/smart-components';
import RoleSettings from './RoleSettings';
import TermSettings from './TermSettings';
import ScheduleSettings from './ScheduleSettings';

export default class CoursesSettings extends React.Component {
  pages = [
    {
      route: 'roles',
      label: <FormattedMessage id="ui-courses.settings.roles" />,
      component: RoleSettings,
    },
    {
      route: 'terms',
      label: <FormattedMessage id="ui-courses.settings.terms" />,
      component: TermSettings,
    },
    {
      route: 'schedules',
      label: <FormattedMessage id="ui-courses.settings.schedules" />,
      component: ScheduleSettings,
    },
  ];

  render() {
    return (
      <Settings {...this.props} pages={this.pages} paneTitle="Courses" />
    );
  }
}
