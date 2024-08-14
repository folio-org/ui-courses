import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import {
  HasCommand,
  Button,
  IconButton,
  Pane,
  PaneFooter,
  PaneMenu,
  Paneset,
  checkScope
} from '@folio/stripes/components';
import { ViewMetaData } from '@folio/stripes/smart-components';
import { AppIcon, TitleManager, withStripes } from '@folio/stripes/core';
import stripesFinalForm from '@folio/stripes/final-form';
import { isEqual } from 'lodash';
import setFieldData from 'final-form-set-field-data';
import LoadingPaneSet from '../LoadingPaneSet';
import { ReserveFormInfo, ReserveFormCopyright, ReserveFormCourses } from './sections';
import { handleKeyCommand } from '../../util/handleKeyCommand';


class ReserveForm extends React.Component {
  static propTypes = {
    data: PropTypes.object,
    handlers: PropTypes.shape({
      onClose: PropTypes.func.isRequired,
    }),
    handleSubmit: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
    form: PropTypes.object,
    pristine: PropTypes.bool,
    submitting: PropTypes.bool,
    values: PropTypes.object,
    stripes: PropTypes.shape({
      config: PropTypes.shape({
        showDevInfo: PropTypes.bool,
      }).isRequired,
    }).isRequired,
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
            id="clickable-update-reserve"
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
        <FormattedMessage id="ui-courses.closeEditReserve">
          {ariaLabel => (
            <IconButton
              icon="times"
              id="close-reserve-form-button"
              onClick={this.props.handlers.onClose}
              aria-label={typeof ariaLabel === 'string' ? ariaLabel : ariaLabel[0]}
            />
          )}
        </FormattedMessage>
      </PaneMenu>
    );
  }

  render() {
    const {
      isLoading,
      handlers,
      handleSubmit,
      data,
      form: { mutators },
      values = {},
      pristine,
      submitting
    } = this.props;
    if (isLoading) return <LoadingPaneSet onClose={handlers.onClose} />;

    const copiedItem = values.copiedItem || {};
    const title = copiedItem.title;
    const href = `/inventory/view/${copiedItem.instanceId}/${copiedItem.holdingsId}/${values.itemId}`;
    const linkToItem = (
      <a rel="noopener noreferrer" target="_blank" href={href}>
        Item title:
        &nbsp;
        <i>{title}</i>
      </a>
    );

    const sectionProps = {
      data,
      handlers, // XXX We probably don't need this
      mutators, // XXX We probably don't need this
      values,   // XXX We probably don't need this
    };

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
    ];

    return (
      <HasCommand commands={shortcuts} isWithinScope={checkScope} scope={document.body}>
        <Paneset>
          <Pane
            appIcon={<AppIcon app="courses" />}
            centerContent
            defaultWidth="100%"
            footer={this.renderPaneFooter()}
            firstMenu={this.renderFirstMenu()}
            id="pane-reserve-form"
            paneTitle={linkToItem}
          >
            <TitleManager record={title}>
              <form id="form-course">
                <ViewMetaData metadata={values.metadata} />
                <ReserveFormInfo {...sectionProps} />
                <ReserveFormCopyright {...sectionProps} />
                <ReserveFormCourses {...sectionProps} />
                {
                !this.props.stripes.config.showDevInfo ? '' :
                <>
                  <p>&nbsp;</p>
                  <hr />
                  <h1>Developer Info</h1>
                  <pre>
                    {JSON.stringify(data, null, 2)}
                  </pre>
                </>
              }
              </form>
            </TitleManager>
          </Pane>
        </Paneset>
      </HasCommand>
    );
  }
}

export default withStripes(stripesFinalForm({
  initialValuesEqual: (a, b) => isEqual(a, b),
  navigationCheck: true,
  subscription: {
    values: true,
  },
  mutators: { setFieldData }
})(ReserveForm));
