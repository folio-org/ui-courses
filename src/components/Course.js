import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import {
  Button,
  Icon,
  Layout,
  Pane,
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
    resources: PropTypes.object.isRequired,
    mutator: PropTypes.object.isRequired,
  };

  renderActionMenu = ({ onToggle }) => (
    <>
      <Button
        buttonStyle="dropdownItem"
        id="clickable-edit-course"
        onClick={() => {
          onToggle();
          this.props.handlers.onEdit();
        }}
      >
        <Icon icon="edit">
          <FormattedMessage id="stripes-components.button.edit" />
        </Icon>
      </Button>
      <Button
        buttonStyle="dropdownItem"
        id="clickable-crosslist-course"
        onClick={() => {
          onToggle();
          this.props.handlers.onCrosslist();
        }}
      >
        <FormattedMessage id="ui-courses.button.crosslist" />
      </Button>
    </>
  )

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
    const { data, isLoading, handlers, stripes, resources, mutator } = this.props;
    if (isLoading) return this.renderLoadingPane();

    const record = data.course;
    const hasPerm = stripes.hasPerm('course-reserves-storage.courses.item.put');

    return (
      <Pane
        actionMenu={hasPerm ? this.renderActionMenu : undefined}
        appIcon={<AppIcon app="courses" />}
        centerContent
        defaultWidth="fill"
        dismissible
        id="pane-view-course"
        onClose={handlers.onClose}
        paneTitle={record.name}
        paneSub={<FormattedMessage id="ui-courses.courseByNumber" values={{ number: record.courseNumber }} />}
      >
        <TitleManager record={record.name}>
          <ViewCourse data={data} resources={resources} mutator={mutator} />
        </TitleManager>
      </Pane>
    );
  }
}

export default withStripes(Course);
