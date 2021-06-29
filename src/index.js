import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import { Switch, Redirect } from 'react-router-dom';
import { Route as NestedRoute } from '@folio/stripes/core';
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

class CoursesApp extends React.Component {
  static propTypes = {
    match: PropTypes.shape({
      path: PropTypes.string.isRequired,
    }).isRequired,
    actAs: PropTypes.string.isRequired,
  };

  render() {
    const {
      actAs,
      match: { path }
    } = this.props;

    if (actAs === 'settings') {
      return <Settings {...this.props} />;
    }
    return (
      <Switch>
        <Redirect exact from={path} to={`${path}/courses`} />
        <NestedRoute path={`${path}/courses`} exact component={CoursesRoute} />
        <NestedRoute path={`${path}/courses`} component={FullScreenRoute}>
          <Switch>
            <NestedRoute path={`${path}/courses/create`} component={CreateCourseRoute} />
            <NestedRoute path={`${path}/courses/:id`} exact component={CourseRoute} />
            <NestedRoute path={`${path}/courses/:id/edit`} component={EditCourseRoute} />
            <NestedRoute path={`${path}/courses/:id/delete`} render={(props2) => <EditCourseRoute {...props2} deleteCourse />} />
            <NestedRoute path={`${path}/courses/:id/crosslist/:clid`} component={CrosslistCourseRoute} />
            <NestedRoute path={`${path}/courses/notes/new`} component={NoteCreateRoute} />
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
    );
  }
}

export default hot(module)(CoursesApp);
