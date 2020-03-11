import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import {
  Button,
  Layout,
  Pane,
  PaneMenu,
  Spinner,
} from '@folio/stripes/components';
import { withStripes, AppIcon, TitleManager } from '@folio/stripes/core';
import ViewCourse from './ViewCourse';


class Course extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      course: PropTypes.object,
    }),
    urls: PropTypes.object,
    isLoading: PropTypes.bool,
    handlers: PropTypes.shape({
      onClose: PropTypes.func.isRequired,
    }).isRequired,
    stripes: PropTypes.shape({
      hasPerm: PropTypes.func.isRequired,
    }).isRequired,
    mutator: PropTypes.object.isRequired,
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
        <FormattedMessage id="ui-courses.crosslistCourse">
          {ariaLabel => (
            <Button
              aria-label={ariaLabel}
              buttonStyle="primary"
              id="clickable-crosslist-course"
              marginBottom0
              to={this.props.urls.crosslist()}
            >
              <FormattedMessage id="ui-courses.button.crosslist" />
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
    const { data, isLoading, handlers, stripes, mutator } = this.props;
    if (isLoading) return this.renderLoadingPane();

    const record = data.course;
    const hasPerm = stripes.hasPerm('course-reserves-storage.courses.item.put');

    return (
      <Pane
        appIcon={<AppIcon app="courses" />}
        defaultWidth="fill"
        dismissible
        id="pane-view-course"
        lastMenu={hasPerm ? this.renderLastMenu() : <React.Fragment />}
        onClose={handlers.onClose}
        paneTitle={record.name}
        paneSub={`Course ${record.courseNumber}`}
      >
        <TitleManager record={record.name}>
          <ViewCourse data={data} mutator={mutator} />
        </TitleManager>
      </Pane>
    );
  }
}

export default withStripes(Course);
