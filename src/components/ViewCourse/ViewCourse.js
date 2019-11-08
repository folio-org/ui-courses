import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { AccordionSet, Accordion } from '@folio/stripes/components';
import ViewCourseSummary from './sections/ViewCourseSummary';
import ViewCourseDeveloper from './sections/ViewCourseDeveloper';

class ViewCourse extends React.Component {
  static propTypes = {
    record: PropTypes.object.isRequired,
    handlers: PropTypes.object,
  };

  render() {
    const { record, handlers } = this.props;

    return (
      <AccordionSet>
        <Accordion
          id="view-course-summary"
          label={<FormattedMessage id="ui-courses.accordion.summary" />}
          displayWhenClosed={<FormattedMessage id="ui-courses.accordion.summary.help" />}
        >
          <ViewCourseSummary record={record} />
        </Accordion>
        <Accordion
          id="view-course-developer"
          closedByDefault
          label={<FormattedMessage id="ui-courses.accordion.developer" />}
          displayWhenClosed={<FormattedMessage id="ui-courses.accordion.developer.help" />}
        >
          <ViewCourseDeveloper record={record} />
        </Accordion>
      </AccordionSet>
    );
  }
}

export default ViewCourse;
