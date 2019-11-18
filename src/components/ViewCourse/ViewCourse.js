import React from 'react';
import PropTypes from 'prop-types';
import { AccordionSet } from '@folio/stripes/components';
import VCAccordion from './VCAccordion';
import { ViewCourseData, ViewCourseSummary, ViewCourseDeveloper } from './sections';

class ViewCourse extends React.Component {
  static propTypes = {
    record: PropTypes.object.isRequired,
  };

  render() {
    const { record } = this.props;

    return (
      <AccordionSet>
        <VCAccordion id="data">
          <ViewCourseData record={record} />
        </VCAccordion>
        <VCAccordion id="summary">
          <ViewCourseSummary record={record} />
        </VCAccordion>
        <VCAccordion id="developer" closedByDefault>
          <ViewCourseDeveloper record={record} />
        </VCAccordion>
      </AccordionSet>
    );
  }
}

export default ViewCourse;
