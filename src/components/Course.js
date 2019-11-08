import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import {
  Button,
  Layout,
  Pane,
  PaneMenu,
} from '@folio/stripes/components';
import { AppIcon, TitleManager } from '@folio/stripes/core';
import { Spinner } from '@folio/stripes-erm-components';

class Course extends React.Component {
  static propTypes = {
    data: PropTypes.object,
    urls: PropTypes.object,
    isLoading: PropTypes.bool,
    handlers: PropTypes.shape({
      onClose: PropTypes.func.isRequired,
    }).isRequired,
  };

  renderLastMenu = () => {
    return (
      <PaneMenu>
        <FormattedMessage id="ui-courses.editCourse">
          {ariaLabel => (
            <Button
              aria-label={ariaLabel}
              buttonStyle="primary"
              id="clickable-edit-course"
              marginBottom0
              to={this.props.urls.edit()}
            >
              <FormattedMessage id="stripes-components.button.edit" />
            </Button>
          )}
        </FormattedMessage>
      </PaneMenu>
    );
  }

  renderLoadingPane = () => {
    return (
      <Pane
        defaultWidth="fill%"
        dismissible
        id="pane-view-course"
        onClose={this.props.handlers.onClose}
        paneTitle={<FormattedMessage id="ui-courses.loading" />}
      >
        <Layout className="marginTop1">
          <Spinner />
        </Layout>
      </Pane>
    );
  }

  render() {
    const { data, isLoading, handlers } = this.props;
    if (isLoading) return this.renderLoadingPane();

    const record = data.course;
    const departmentObject = record.departmentObject || {};
    const courseListingObject = record.courseListingObject || {};
    const termObject = courseListingObject.termObject || {};
    const courseTypeObject = courseListingObject.courseTypeObject || {};

    return (
      <Pane
        appIcon={<AppIcon app="courses" />}
        defaultWidth="fill"
        dismissible
        id="pane-view-course"
        lastMenu={this.renderLastMenu()}
        onClose={handlers.onClose}
        paneTitle={record.name}
        paneSub="Pane Subtitle"
      >
        <TitleManager record={record.id.substring(0, 8)}>
          <ul>
            <li><b>Name:</b>{record.name}</li>
            <li><b>Description:</b>{record.description}</li>
            <li><b>Department:</b>{departmentObject.name}</li>
            <li><b>Department description:</b>{departmentObject.description}</li>
            <li><b>Registrar ID:</b>{courseListingObject.registrarId}</li>
            <li><b>External ID:</b>{courseListingObject.externalId}</li>
            <li><b>Term:</b>{termObject.name}</li>
            <li><b>Start date:</b>{termObject.startDate}</li>
            <li><b>End date:</b>{termObject.endDate}</li>
            <li><b>Course type:</b>{courseTypeObject.name}</li>
            <li><b>Course number:</b>{record.courseNumber}</li>
            <li><b>Section:</b>{record.sectionName}</li>
          </ul>
          <pre>{JSON.stringify(record, null, 2)}</pre>
        </TitleManager>
      </Pane>
    );
  }
}

export default Course;
