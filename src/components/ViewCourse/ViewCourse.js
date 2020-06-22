import React from 'react';
import PropTypes from 'prop-types';
import { withStripes } from '@folio/stripes/core';
import { AccordionSet } from '@folio/stripes/components';
import VCAccordion from './VCAccordion';
import {
  ViewCourseData,
  ViewCourseCrosslistings,
  ViewCourseInstructors,
  ViewCourseTerm,
  ViewCourseReserves,
} from './sections';

class ViewCourse extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      course: PropTypes.object,
      crossListed: PropTypes.arrayOf(PropTypes.object),
      reserves: PropTypes.arrayOf(PropTypes.object),
      items: PropTypes.arrayOf(PropTypes.object),
    }),
    mutator: PropTypes.object.isRequired,
    stripes: PropTypes.shape({
      config: PropTypes.shape({
        showDevInfo: PropTypes.bool,
      }).isRequired,
    }).isRequired,
  };

  render() {
    const { data, mutator } = this.props;
    const { course, crossListed, reserves, items } = data;

    return (
      <AccordionSet>
        <VCAccordion id="data">
          <ViewCourseData record={course} />
        </VCAccordion>
        <VCAccordion id="crosslistings">
          <ViewCourseCrosslistings crossListed={crossListed} />
        </VCAccordion>
        <VCAccordion id="instructors">
          <ViewCourseInstructors record={course} mutator={mutator} />
        </VCAccordion>
        <VCAccordion id="term">
          <ViewCourseTerm record={course} />
        </VCAccordion>
        <VCAccordion id="reserves">
          <ViewCourseReserves course={course} reserves={reserves} items={items} mutator={mutator} />
        </VCAccordion>
        {
          !this.props.stripes.config.showDevInfo ? '' :
          <VCAccordion id="developer" closedByDefault>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </VCAccordion>
        }
      </AccordionSet>
    );
  }
}

export default withStripes(ViewCourse);
