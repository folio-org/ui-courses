import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import {
  Button,
  Layout,
  Pane,
  PaneMenu,
} from '@folio/stripes/components';
import { AppIcon, TitleManager } from '@folio/stripes/core';
import { Spinner } from '@folio/stripes-erm-components';

const Course = (props) => (
  <p>This is the single course {props.data.course.id}</p>
);

Course.propTypes = {
  data: PropTypes.shape({
    course: PropTypes.object.isRequired,
  }).isRequired,
};

export default Course;
