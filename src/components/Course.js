import React, { createRef } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import {
  AccordionStatus,
  HasCommand,
  checkScope,
  Button,
  Icon,
  Layout,
  Pane,
  Spinner,
  expandAllSections,
  collapseAllSections,
} from '@folio/stripes/components';
import { withStripes, AppIcon, TitleManager, IfPermission } from '@folio/stripes/core';
import ViewCourse from './ViewCourse';
import { handleKeyCommand } from '../util/handleKeyCommand';


class Course extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      course: PropTypes.object,
      reserves: PropTypes.array,
    }),
    isLoading: PropTypes.bool,
    handlers: PropTypes.shape({
      onClose: PropTypes.func.isRequired,
      onCrosslist: PropTypes.func.isRequired,
      onDuplicate: PropTypes.func.isRequired,
      onEdit: PropTypes.func.isRequired,
      onDelete: PropTypes.func.isRequired,
    }).isRequired,
    stripes: PropTypes.shape({
      hasPerm: PropTypes.func.isRequired,
    }).isRequired,
    resources: PropTypes.object.isRequired,
    mutator: PropTypes.object.isRequired,
  };

  accordionStatusRef = createRef();

  renderActionMenu = ({ onToggle }, hasReserves) => (
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
        <Icon icon="transfer">
          <FormattedMessage id="ui-courses.button.crosslist" />
        </Icon>
      </Button>
      <Button
        buttonStyle="dropdownItem"
        id="clickable-duplicate-course"
        onClick={() => {
          onToggle();
          this.props.handlers.onDuplicate();
        }}
      >
        <Icon icon="duplicate">
          <FormattedMessage id="ui-courses.button.duplicate" />
        </Icon>
      </Button>
      <IfPermission perm="course-reserves-storage.courses.item.delete">
        <Button
          buttonStyle="dropdownItem"
          id="clickable-delete-course"
          disabled={hasReserves}
          onClick={() => {
            onToggle();
            this.props.handlers.onDelete();
          }}
        >
          <Icon icon="trash">
            <FormattedMessage id="ui-courses.button.delete" />
          </Icon>
        </Button>
      </IfPermission>
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

    const shortcuts = [
      {
        name: 'edit',
        handler: handleKeyCommand(() => {
          if (hasPerm) this.props.handlers.onEdit();
        })
      },
      {
        name: 'duplicateRecord',
        handler: handleKeyCommand(() => {
          if (hasPerm) this.props.handlers.onDuplicate();
        }),
      },
      {
        name: 'expandAllSections',
        handler: (e) => expandAllSections(e, this.accordionStatusRef),
      },
      {
        name: 'collapseAllSections',
        handler: (e) => collapseAllSections(e, this.accordionStatusRef),
      },
      {
        name: 'cancel',
        shortcut: 'esc',
        handler: handleKeyCommand(handlers.onClose),
      },
    ];

    return (
      <HasCommand
        commands={shortcuts}
        isWithinScope={checkScope}
        scope={document.body}
      >
        <Pane
          actionMenu={hasPerm ? (vars) => this.renderActionMenu(vars, data.reserves.length > 0) : undefined}
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
            <AccordionStatus ref={this.accordionStatusRef}>
              <ViewCourse data={data} resources={resources} mutator={mutator} />
            </AccordionStatus>
          </TitleManager>
        </Pane>
      </HasCommand>
    );
  }
}

export default withStripes(Course);
