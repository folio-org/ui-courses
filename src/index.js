import React from 'react';
import PropTypes from 'prop-types';
import Switch from 'react-router-dom/Switch';
import Redirect from 'react-router-dom/Redirect';
import { Route as NestedRoute } from '@folio/stripes/core';
import Settings from './settings';
import CoursesRoute from './routes/CoursesRoute';
import CourseRoute from './routes/CourseRoute';
import CreateCourseRoute from './routes/CreateCourseRoute';
import EditCourseRoute from './routes/EditCourseRoute';
import CrosslistCourseRoute from './routes/CrosslistCourseRoute';
import ReservesRoute from './routes/ReservesRoute';
import ReserveRoute from './routes/ReserveRoute';

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
        <NestedRoute path={`${path}/courses`} component={CoursesRoute}>
          <Switch>
            <NestedRoute path={`${path}/courses/create`} component={CreateCourseRoute} />
            <NestedRoute path={`${path}/courses/:id`} exact component={CourseRoute} />
            <NestedRoute path={`${path}/courses/:id/edit`} component={EditCourseRoute} />
            <NestedRoute path={`${path}/courses/:id/crosslist/:clid`} component={CrosslistCourseRoute} />
          </Switch>
        </NestedRoute>
        <NestedRoute path={`${path}/reserves`} component={ReservesRoute}>
          <Switch>
            <NestedRoute path={`${path}/reserves/:id`} exact component={ReserveRoute} />
          </Switch>
        </NestedRoute>
      </Switch>
    );
  }
}

export default CoursesApp;
