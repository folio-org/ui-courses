import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import {
  AccordionSet,
  Button,
  IconButton,
  Layout,
  Pane,
  PaneFooter,
  PaneMenu,
  Paneset,
} from '@folio/stripes/components';
import { AppIcon, TitleManager } from '@folio/stripes/core';
import stripesFinalForm from '@folio/stripes/final-form';
import { isEqual } from 'lodash';
import setFieldData from 'final-form-set-field-data';
import { Spinner } from '@folio/stripes-erm-components';
import VCAccordion from '../ViewCourse/VCAccordion';
import {
  CourseFormInfo,
  CourseFormListing,
  CourseFormInstructors,
} from './sections';

class CourseForm extends React.Component {
  static propTypes = {
    data: PropTypes.object,
    dispatch: PropTypes.func,
    handlers: PropTypes.PropTypes.shape({
      onClose: PropTypes.func.isRequired,
    }),
    handleSubmit: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
    form: PropTypes.object,
    onSubmit: PropTypes.func.isRequired,
    pristine: PropTypes.bool,
    submitting: PropTypes.bool,
    values: PropTypes.object,
  }

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

  renderLoadingPane = () => {
    return (
      <Paneset>
        <Pane
          dismissible
          defaultWidth="100%"
          id="pane-course-form"
          onClose={this.props.handlers.onClose}
          paneTitle={<FormattedMessage id="ui-courses.loading" />}
        >
          <Layout className="marginTop1">
            <Spinner />
          </Layout>
        </Pane>
      </Paneset>
    );
  }

  renderPaneFooter() {
    const {
      handlers,
      handleSubmit,
      pristine,
      submitting,
      values,
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
    const { isLoading, values: { id, name }, isClone } = this.props;
    if (isLoading) return this.renderLoadingPane();

    return (
      <Paneset>
        <FormattedMessage id="ui-courses.create">
          {create => (
            <FormattedMessage id="ui-courses.clone">
              {clone => (
                <Pane
                  appIcon={<AppIcon app="courses" />}
                  defaultWidth="100%"
                  footer={this.renderPaneFooter()}
                  firstMenu={this.renderFirstMenu()}
                  id="pane-course-form"
                  paneTitle={
                    id ? name :
                      isClone ?
                        <FormattedMessage id="ui-courses.cloneCourse" /> :
                        <FormattedMessage id="ui-courses.createCourse" />
                    }
                >
                  <TitleManager record={id ? name : isClone ? clone : create}>
                    <form id="form-course">
                      <AccordionSet>
                        <VCAccordion action="edit" id="courseFormInfo">
                          <CourseFormInfo {...this.getSectionProps('courseFormInfo')} />
                        </VCAccordion>
                        <VCAccordion action="edit" id="courseFormListing">
                          <CourseFormListing {...this.getSectionProps('courseFormListing')} />
                        </VCAccordion>
                        <VCAccordion action="edit" id="courseFormInstructors">
                          <CourseFormInstructors {...this.getSectionProps('courseFormInstructors')} />
                        </VCAccordion>
                      </AccordionSet>
                    </form>
                  </TitleManager>
                </Pane>
              )}
            </FormattedMessage>
          )}
        </FormattedMessage>
      </Paneset>
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
