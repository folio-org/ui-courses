import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Field } from 'react-final-form';
import { required } from '@folio/stripes/util';
import {
  Button,
  Col,
  IconButton,
  Pane,
  PaneFooter,
  PaneMenu,
  Paneset,
  Row,
  TextField,
} from '@folio/stripes/components';
import { AppIcon, TitleManager, Pluggable } from '@folio/stripes/core';
import stripesFinalForm from '@folio/stripes/final-form';
import { isEqual } from 'lodash';
import setFieldData from 'final-form-set-field-data';
import LoadingPaneSet from './LoadingPaneSet';


class InstructorForm extends React.Component {
  static propTypes = {
    data: PropTypes.object,
    handlers: PropTypes.PropTypes.shape({
      onClose: PropTypes.func.isRequired,
    }),
    handleSubmit: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
    pristine: PropTypes.bool,
    submitting: PropTypes.bool,
    values: PropTypes.object,
    form: PropTypes.shape({
      change: PropTypes.func.isRequired,
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
            id="clickable-update-instructor"
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
        <FormattedMessage id="ui-courses.closeEditInstructor">
          {ariaLabel => (
            <IconButton
              icon="times"
              id="close-instructor-form-button"
              onClick={this.props.handlers.onClose}
              aria-label={ariaLabel}
            />
          )}
        </FormattedMessage>
      </PaneMenu>
    );
  }

  selectUser = (user) => {
    const { form: { change } } = this.props;
    change('userId', user.id);
    change('name', `${user.personal.firstName} ${user.personal.lastName}`);
    change('barcode', user.barcode);
  }

  render() {
    const { isLoading, handlers, data, values = {} } = this.props;
    if (isLoading) return <LoadingPaneSet onClose={handlers.onClose} />;

    const copiedItem = values.copiedItem || {};
    const title = copiedItem.title;

    // eslint-disable-next-line react/jsx-one-expression-per-line
    const paneTitle = <span>Add instructor for <i>{data.course.name}</i></span>;

    return (
      <Paneset>
        <Pane
          appIcon={<AppIcon app="courses" />}
          defaultWidth="100%"
          footer={this.renderPaneFooter()}
          firstMenu={this.renderFirstMenu()}
          id="pane-instructor-form"
          paneTitle={paneTitle}
        >
          <TitleManager record={title}>
            <form id="form-course">
              <Row>
                <Col xs={6}>
                  <Field
                    component={TextField}
                    id="edit-instructor-name"
                    label={<FormattedMessage id="ui-courses.field.instructorName" />}
                    maxLength={255}
                    name="name"
                    required
                    validate={required}
                  />
                </Col>
                <Col xs={3}>
                  <Field
                    component={TextField}
                    id="edit-instructor-barcode"
                    label={<FormattedMessage id="ui-courses.field.barcode" />}
                    maxLength={255}
                    name="barcode"
                  />
                </Col>
              </Row>
            </form>
            <Pluggable
              aria-haspopup="true"
              type="find-user"
              id="clickable-find-user"
              searchLabel=<FormattedMessage id="ui-courses.lookUpUser" />
              marginTop0
              searchButtonStyle="link"
              dataKey="patrons"
              selectUser={this.selectUser}
              visibleColumns={['status', 'name', 'patronGroup', 'username', 'barcode']}
            >
              <span data-test-no-plugin-available>No plugin available!</span>
            </Pluggable>
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
})(InstructorForm);
