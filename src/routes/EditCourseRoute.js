import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import { cloneDeep, get } from 'lodash';
import { stripesConnect } from '@folio/stripes/core';
import CourseForm from '../components/CourseForm';
import NoPermissions from '../components/NoPermissions';
import fetchIsPending from '../util/fetchIsPending';
import getOptions from '../util/getOptions';
import exciseObjects from '../util/exciseObjects';
import manifest from '../util/manifest';


class EditCourseRoute extends React.Component {
  static manifest = Object.freeze({
    course: {
      type: 'okapi',
      path: 'coursereserves/courses/:{id}',
      shouldRefresh: () => false,
    },
    courselisting: {
      type: 'okapi',
      path: (_q, _p, resources) => {
        const rec = get(resources, 'course.records.0');
        return !rec ? null : `coursereserves/courselistings/${rec.courseListingId}`;
      },
    },
    departments: manifest.departments,
    coursetypes: manifest.coursetypes,
    terms: manifest.terms,
    locations: manifest.locations,
  });

  static propTypes = {
    handlers: PropTypes.object,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
    location: PropTypes.shape({
      search: PropTypes.string.isRequired,
    }).isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    resources: PropTypes.shape({
      course: PropTypes.object,
      departments: PropTypes.object,
    }).isRequired,
    mutator: PropTypes.shape({
      course: PropTypes.shape({
        PUT: PropTypes.func.isRequired,
      }).isRequired,
      courselisting: PropTypes.shape({
        PUT: PropTypes.func.isRequired,
      }).isRequired,
    }).isRequired,
    stripes: PropTypes.shape({
      hasPerm: PropTypes.func.isRequired,
    }).isRequired,
    intl: PropTypes.shape({
      formatMessage: PropTypes.func.isRequired,
    }),
  };

  static defaultProps = {
    handlers: {},
  }

  getInitialValues = () => {
    const { resources } = this.props;
    const course = get(resources, 'course.records[0]', {});
    const initialValues = cloneDeep(course);
    const {
      department = {},
    } = initialValues;

    // Set the values of dropdown-controlled props as values rather than objects.
    initialValues.department = department.value;

    return initialValues;
  }

  handleClose = () => {
    const { location, match } = this.props;
    this.props.history.push(`/cr/courses/${match.params.id}${location.search}`);
  }

  handleSubmit = (data) => {
    const listing = exciseObjects(data.courseListingObject);
    const course = exciseObjects(data);

    this.props.mutator.course.PUT(course)
      .then(() => this.props.mutator.courselisting.PUT(listing))
      .then(this.handleClose);
  }

  render() {
    const { handlers, stripes, intl } = this.props;

    if (!stripes.hasPerm('course-reserves-storage.courses.item.put')) return <NoPermissions />;

    // Note: TOO MUCH MAGIC here. We pass `onSubmit`, which is not
    // used by <CourseForm>. It _is_ used by react-final-form's
    // <Form>, but that is not used. But <CourseForm> is wrapped in
    // stripesFinalForm, which _implicitly_ invokes <Form>, passing in
    // the props (including `onSubmit`).
    return (
      <CourseForm
        data={{
          departments: getOptions(this, 'departments'),
          coursetypes: getOptions(this, 'coursetypes', 'courseTypes'),
          terms: getOptions(this, 'terms'),
          locations: getOptions(this, 'locations', null, intl.formatMessage({ id: 'ui-courses.options.noneRequired' })),
        }}
        handlers={{ ...handlers, onClose: this.handleClose }}
        initialValues={this.getInitialValues()}
        isLoading={fetchIsPending(this.props.resources)}
        onSubmit={this.handleSubmit}
      />
    );
  }
}

export default injectIntl(stripesConnect(EditCourseRoute));
