import React from 'react';
import PropTypes from 'prop-types';
import { AccordionSet } from '@folio/stripes/components';
import ViewCourseSummary from './sections/ViewCourseSummary';
import ViewCourseDeveloper from './sections/ViewCourseDeveloper';
import VCAccordion from './VCAccordion';

class ViewCourse extends React.Component {
  static propTypes = {
    record: PropTypes.object.isRequired,
    handlers: PropTypes.object,
  };

  render() {
    const { record, handlers } = this.props;

    return (
      <AccordionSet>
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
