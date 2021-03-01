import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Settings } from '@folio/stripes/smart-components';

import DisplaySettings from './DisplaySettings';
import TermSettings from './TermSettings';
import CourseTypeSettings from './CourseTypeSettings';
import DepartmentSettings from './DepartmentSettings';
import ProcessingStatusSettings from './ProcessingStatusSettings';
import CopyrightStatusSettings from './CopyrightStatusSettings';

export default class CoursesSettings extends React.Component {
  pages = [
    {
      route: 'display-settings',
      label: <FormattedMessage id="ui-courses.settings.displaySettings" />,
      component: DisplaySettings,
    },
    {
      route: 'terms',
      label: <FormattedMessage id="ui-courses.settings.terms" />,
      component: TermSettings,
    },
    {
      route: 'coursetypes',
      label: <FormattedMessage id="ui-courses.settings.coursetypes" />,
      component: CourseTypeSettings,
    },
    {
      route: 'departments',
      label: <FormattedMessage id="ui-courses.settings.departments" />,
      component: DepartmentSettings,
    },
    {
      route: 'processingstatuses',
      label: <FormattedMessage id="ui-courses.settings.processingstatuses" />,
      component: ProcessingStatusSettings,
    },
    {
      route: 'copyrightstatuses',
      label: <FormattedMessage id="ui-courses.settings.copyrightstatuses" />,
      component: CopyrightStatusSettings,
    },
  ];

  render() {
    return (
      <Settings {...this.props} pages={this.pages} paneTitle={<FormattedMessage id="ui-courses.settings.paneTitle" />} />
    );
  }
}
