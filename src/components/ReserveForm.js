import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import {
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
import LoadingPaneSet from './LoadingPaneSet';
import ReserveFormInfo from './ReserveFormInfo';


class ReserveForm extends React.Component {
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
  }

  renderPaneFooter() {
    const {
      handlers,
      handleSubmit,
      pristine,
      submitting,
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
            id="clickable-update-course"
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
              id="close-reserve-form-button"
              onClick={this.props.handlers.onClose}
              aria-label={ariaLabel}
            />
          )}
        </FormattedMessage>
      </PaneMenu>
    );
  }

  render() {
    const { isLoading, values: { name } } = this.props;
    if (isLoading) return <LoadingPaneSet onClose={this.props.handlers.onClose} />;

    const { data, handlers, form: { mutators }, values = {} } = this.props;
    const sectionProps = {
      data,
      handlers, // XXX We probably don't need this
      mutators, // XXX We probably don't need this
      values,   // XXX We probably don't need this
    };

    return (
      <Paneset>
        <Pane
          appIcon={<AppIcon app="courses" />}
          defaultWidth="100%"
          footer={this.renderPaneFooter()}
          firstMenu={this.renderFirstMenu()}
          id="pane-reserve-form"
          paneTitle={name}
        >
          <TitleManager record={name}>
            <form id="form-course">
              <ReserveFormInfo {...sectionProps} />
            </form>
          </TitleManager>
        </Pane>
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
})(ReserveForm);
