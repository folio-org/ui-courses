import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import {
  AccordionSet,
  Button,
  IconButton,
  Pane,
  PaneFooter,
  PaneMenu,
  Paneset,
} from '@folio/stripes/components';
import { AppIcon, TitleManager } from '@folio/stripes/core';
import stripesFinalForm from '@folio/stripes/final-form';
import { isEqual } from 'lodash';
import setFieldData from 'final-form-set-field-data';
import VCAccordion from '../ViewCourse/VCAccordion';
import LoadingPaneSet from '../LoadingPaneSet';
import {
  CourseFormInfo,
  CourseFormListing,
} from './sections';

class CourseForm extends React.Component {
  static propTypes = {
    data: PropTypes.object,
    handlers: PropTypes.PropTypes.shape({
      onClose: PropTypes.func.isRequired,
    }),
    handleSubmit: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
    form: PropTypes.object,
    pristine: PropTypes.bool,
    submitting: PropTypes.bool,
    values: PropTypes.object,
    isCrosslist: PropTypes.bool,
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
    const { isLoading, values: { id, name }, isCrosslist } = this.props;
    if (isLoading) return <LoadingPaneSet onClose={this.props.handlers.onClose} />;
    const clKey = isCrosslist ? 'courseFormCrosslisting' : 'courseFormListing';

    return (
      <Paneset>
        <FormattedMessage id="ui-courses.create">
          {create => (
            <FormattedMessage id="ui-courses.crosslist">
              {crosslist => (
                <Pane
                  appIcon={<AppIcon app="courses" />}
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
                      <AccordionSet>
                        <VCAccordion action="edit" id="courseFormInfo">
                          <CourseFormInfo {...this.getSectionProps('courseFormInfo')} />
                        </VCAccordion>
                        <VCAccordion action="edit" id={clKey}>
                          <CourseFormListing {...this.getSectionProps(clKey)} />
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
