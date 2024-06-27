import React, { createRef } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import {
  AccordionSet,
  AccordionStatus,
  HasCommand,
  checkScope,
  Button,
  IconButton,
  Pane,
  PaneFooter,
  PaneMenu,
  Paneset,
  collapseAllSections,
  expandAllSections,
} from '@folio/stripes/components';
import { AppIcon, IfPermission, TitleManager } from '@folio/stripes/core';
import stripesFinalForm from '@folio/stripes/final-form';
import { isEqual } from 'lodash';
import setFieldData from 'final-form-set-field-data';
import VCAccordion from '../ViewCourse/VCAccordion';
import LoadingPaneSet from '../LoadingPaneSet';
import {
  CourseFormInfo,
  CourseFormListing,
} from './sections';
import { handleKeyCommand } from '../../util/handleKeyCommand';

class CourseForm extends React.Component {
  static propTypes = {
    data: PropTypes.object,
    handlers: PropTypes.shape({
      onClose: PropTypes.func.isRequired,
    }),
    handleSubmit: PropTypes.func.isRequired,
    deleteCourse: PropTypes.bool,
    handleDelete: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
    form: PropTypes.object,
    pristine: PropTypes.bool,
    submitting: PropTypes.bool,
    values: PropTypes.object,
    isCrosslist: PropTypes.bool,
    nreserves: PropTypes.string,
    hasCrossListedCourses: PropTypes.bool.isRequired,
  }

  accordionStatusRef = createRef();

  getSectionProps(id) {
    const { data, handlers, form: { mutators }, values = {} } = this.props;

    return {
      data,
      handlers,
      id,
      mutators,
      values,
    };
  }

  renderPaneFooter() {
    const {
      handlers,
      handleSubmit,
      pristine,
      submitting,
      values,
      deleteCourse,
      handleDelete,
      nreserves,
      hasCrossListedCourses,
    } = this.props;

    return (
      <PaneFooter
        renderStart={(
          <Button
            buttonStyle="default mega"
            id="clickable-cancel"
            marginBottom0
            onClick={handlers.onClose}
          >
            <FormattedMessage id="stripes-components.cancel" />
          </Button>
        )}
        renderEnd={(
          <>
            <Button
              buttonStyle="primary mega"
              disabled={pristine || submitting}
              id={values.id ? 'clickable-update-course' : 'clickable-create-course'}
              marginBottom0
              onClick={handleSubmit}
              type="submit"
            >
              <FormattedMessage id="stripes-components.saveAndClose" />
            </Button>
            <IfPermission perm="course-reserves-storage.courses.item.delete">
              {
                (values.id && (nreserves === '0' || hasCrossListedCourses)) && (
                  !deleteCourse ? (
                    <Button
                      buttonStyle="default mega"
                      id="clickable-delete-course"
                      marginBottom0
                      to={`delete?nreserves=${nreserves}`}
                    >
                      <FormattedMessage id="ui-courses.delete" />
                    </Button>
                  ) : (
                    <Button
                      buttonStyle="danger mega"
                      id="clickable-really-delete-course"
                      marginBottom0
                      onClick={() => handleDelete(values)}
                    >
                      <FormattedMessage id="ui-courses.reallyDelete" />
                    </Button>
                  )
                )
              }
            </IfPermission>
          </>
        )}
      />
    );
  }

  renderFirstMenu() {
    return (
      <PaneMenu>
        <FormattedMessage id="ui-courses.closeEditCourse">
          {ariaLabel => (
            <IconButton
              icon="times"
              id="close-course-form-button"
              onClick={this.props.handlers.onClose}
              aria-label={ariaLabel}
            />
          )}
        </FormattedMessage>
      </PaneMenu>
    );
  }

  render() {
    const {
      isLoading,
      values: { id, name },
      isCrosslist,
      handleSubmit,
      submitting,
      pristine,
      handlers
    } = this.props;
    if (isLoading) return <LoadingPaneSet onClose={this.props.handlers.onClose} />;
    const clKey = isCrosslist ? 'courseFormCrosslisting' : 'courseFormListing';

    const shortcuts = [
      {
        name: 'save',
        handler: handleKeyCommand(handleSubmit, { disabled: pristine || submitting }),
      },
      {
        name: 'cancel',
        shortcut: 'esc',
        handler: handleKeyCommand(handlers.onClose),
      },
      {
        name: 'expandAllSections',
        handler: (e) => expandAllSections(e, this.accordionStatusRef),
      },
      {
        name: 'collapseAllSections',
        handler: (e) => collapseAllSections(e, this.accordionStatusRef),
      },
    ];

    return (
      <HasCommand
        commands={shortcuts}
        scope={document.body}
        isWithinScope={checkScope}
      >
        <Paneset>
          <FormattedMessage id="ui-courses.create">
            {create => (
              <FormattedMessage id="ui-courses.crosslist">
                {crosslist => (
                  <Pane
                    appIcon={<AppIcon app="courses" />}
                    centerContent
                    defaultWidth="100%"
                    footer={this.renderPaneFooter()}
                    firstMenu={this.renderFirstMenu()}
                    id="pane-course-form"
                    paneTitle={
                    id ? name :
                      isCrosslist ?
                        <FormattedMessage id="ui-courses.crosslistCourse" /> :
                        <FormattedMessage id="ui-courses.createCourse" />
                    }
                  >
                    <TitleManager record={id ? name : isCrosslist ? crosslist : create}>
                      <form id="form-course">
                        <AccordionStatus ref={this.accordionStatusRef}>
                          <AccordionSet>
                            <VCAccordion action="edit" id="courseFormInfo">
                              <CourseFormInfo {...this.getSectionProps('courseFormInfo')} />
                            </VCAccordion>
                            <VCAccordion action="edit" id={clKey}>
                              <CourseFormListing {...this.getSectionProps(clKey)} />
                            </VCAccordion>
                          </AccordionSet>
                        </AccordionStatus>
                      </form>
                    </TitleManager>
                  </Pane>
                )}
              </FormattedMessage>
            )}
          </FormattedMessage>
        </Paneset>
      </HasCommand>
    );
  }
}

export default stripesFinalForm({
  initialValuesEqual: (a, b) => isEqual(a, b),
  navigationCheck: true,
  subscription: {
    values: true,
  },
  mutators: { setFieldData }
})(CourseForm);
