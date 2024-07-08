import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Redirect } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { Route as NestedRoute, AppContextMenu } from '@folio/stripes/core';
import {
  checkScope,
  CommandList,
  defaultKeyboardShortcuts,
  HasCommand,
  KeyboardShortcutsModal,
  NavList,
  NavListItem,
  NavListSection,
} from '@folio/stripes/components';
import Settings from './settings';
import FullScreenRoute from './routes/FullScreenRoute';
import CoursesRoute from './routes/CoursesRoute';
import CourseRoute from './routes/CourseRoute';
import CreateCourseRoute from './routes/CreateCourseRoute';
import EditCourseRoute from './routes/EditCourseRoute';
import CrosslistCourseRoute from './routes/CrosslistCourseRoute';
import ReservesRoute from './routes/ReservesRoute';
import ReserveRoute from './routes/ReserveRoute';
import EditReserveRoute from './routes/EditReserveRoute';
import AddInstructorRoute from './routes/AddInstructorRoute';
import EditInstructorRoute from './routes/EditInstructorRoute';
import NoteCreateRoute from './routes/NoteCreateRoute';
import NoteViewRoute from './routes/NoteViewRoute';
import NoteEditRoute from './routes/NoteEditRoute';

class CoursesApp extends React.Component {
  static propTypes = {
    match: PropTypes.shape({
      path: PropTypes.string.isRequired,
    }).isRequired,
    actAs: PropTypes.string.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };

  state = {
    isShortcutsModalOpen: false
  }

  focusSearchField = () => {
    const el = document.querySelector('[aria-label="Search courses"]');

    if (el) {
      el.focus();
    }
  };

  toggleModal = () => this.setState(prev => ({
    ...prev,
    isShortcutsModalOpen: !prev.isShortcutsModalOpen
  }));

  shortcuts = [
    {
      name: 'search',
      handler: this.focusSearchField,
    },
    {
      name: 'openShortcutModal',
      handler: this.toggleModal,
    },
  ];

  render() {
    const {
      actAs,
      match: { path }
    } = this.props;

    if (actAs === 'settings') {
      return <Settings {...this.props} />;
    }
    return (
      <>
        <CommandList commands={defaultKeyboardShortcuts}>
          <HasCommand
            commands={this.shortcuts}
            isWithinScope={checkScope}
            scope={document.body}
          >
            <AppContextMenu>
              {(handleToggle) => (
                <NavList>
                  <NavListSection>
                    <NavListItem
                      id="courses-app-search-item"
                      onClick={() => {
                        this.props.history.push('/cr/courses');
                      }}
                    >
                      <FormattedMessage id="ui-courses.appMenu.coursesAppSearch" />
                    </NavListItem>
                    <NavListItem
                      id="keyboard-shortcuts-item"
                      onClick={() => {
                        handleToggle();
                        this.toggleModal();
                      }}
                    >
                      <FormattedMessage id="ui-courses.appMenu.keyboardShortcuts" />
                    </NavListItem>
                  </NavListSection>
                </NavList>
              )}
            </AppContextMenu>
            <Switch>
              <Redirect exact from={path} to={`${path}/courses`} />
              <NestedRoute path={`${path}/courses`} exact component={CoursesRoute} />
              <NestedRoute path={`${path}/courses`} component={FullScreenRoute}>
                <Switch>
                  <NestedRoute path={`${path}/courses/create`} component={CreateCourseRoute} />
                  <NestedRoute path={`${path}/courses/:id`} exact component={CourseRoute} />
                  <NestedRoute path={`${path}/courses/:id/edit`} component={EditCourseRoute} />
                  <NestedRoute path={`${path}/courses/:id/crosslist/:clid`} component={CrosslistCourseRoute} />
                  <NestedRoute path={`${path}/courses/notes/new`} component={NoteCreateRoute} />
                  <NestedRoute path={`${path}/courses/notes/:id`} exact component={NoteViewRoute} />
                  <NestedRoute path={`${path}/courses/notes/:id/edit`} component={NoteEditRoute} />
                </Switch>
              </NestedRoute>
              <NestedRoute path={`${path}/reserves`} exact component={ReservesRoute} />
              <NestedRoute path={`${path}/reserves`} component={FullScreenRoute}>
                <Switch>
                  <NestedRoute path={`${path}/reserves/:clid/:cid/:id`} exact component={ReserveRoute} />
                  <NestedRoute path={`${path}/reserves/:clid/:cid/:id/:itemId/edit`} component={EditReserveRoute} />
                </Switch>
              </NestedRoute>
              <NestedRoute path={`${path}/instructors`} component={FullScreenRoute}>
                <Switch>
                  <NestedRoute path={`${path}/instructors/:clid/:cid/add`} exact component={AddInstructorRoute} />
                  <NestedRoute path={`${path}/instructors/:clid/:cid/:iid/edit`} exact component={EditInstructorRoute} />
                </Switch>
              </NestedRoute>
            </Switch>
          </HasCommand>
        </CommandList>
        {this.state.isShortcutsModalOpen && (
          <KeyboardShortcutsModal
            allCommands={defaultKeyboardShortcuts}
            onClose={this.toggleModal}
          />
        )}
      </>
    );
  }
}

export default CoursesApp;
