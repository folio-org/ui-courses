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
    const id = (data.course.id ? data.course.id : 'Course ID [Missing]');

    if (isLoading) return this.renderLoadingPane();

    return (
      <Pane
        appIcon={<AppIcon app="shipping" />}
        defaultWidth="fill"
        dismissible
        id="pane-view-course"
        lastMenu={this.renderLastMenu()}
        onClose={handlers.onClose}
        paneTitle={'Course ' + id}
        paneSub="Pane Subtitle"
      >
        <TitleManager record={id.substring(0, 8)}>
          <p>This is the single course {id}</p>
        </TitleManager>
      </Pane>
    );
  }
}

export default Course;
