import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route, Switch } from 'react-router-dom';
import Settings from './settings';

class CoursesApp extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    actAs: PropTypes.string.isRequired,
    stripes: PropTypes.shape({
      connect: PropTypes.func,
    }),
  };

  render() {
    const {
      actAs,
      match: {
        path
      }
    } = this.props;

    if (actAs === 'settings') {
      return <Settings {...this.props} />;
    }
    return (
      <Switch>
        <Redirect
          exact
          from={path}
          to={`${path}/courses`}
        />
        <Route
          path={`${path}/courses`}
          render={() => (
            <span>
              <h1>This is the Courses app.</h1>
              <p>Maintain courses and reserve items for them.</p>
            </span>
          )}
        />
      </Switch>
    );
  }
}

export default CoursesApp;
