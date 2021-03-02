import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, useIntl } from 'react-intl';
import { useQuery } from 'react-query';

import { Button, Checkbox, Modal, Select } from '@folio/stripes/components';
import { useOkapiKy } from '@folio/stripes/core';

import manifest from '../util/manifest';

const DuplicateCourseModal = ({ data, history, onClose, open }) => {
  const intl = useIntl();
  const ky = useOkapiKy();

  const [term, setTerm] = useState();
  const { data: terms } = useQuery(
    ['ui-courses', manifest.terms.path],
    () => ky(manifest.terms.path).json(),
    {
      onSuccess: json => setTerm(json[0]?.value),
      placeholderData: [],
      select: json => ((json?.terms ?? [])
        .map(t => ({ value: t.id, label: t.name }))
        .sort((a, b) => a.label.localeCompare(b.label))
      )
    }
  );

  const [duplicateCrosslistedCourses, setDuplicateCrosslistedCourses] = useState(false);
  useQuery(
    ['ui-courses', manifest.displaySettings.path],
    () => ky(manifest.displaySettings.path).json(),
    {
      onSuccess: json => setDuplicateCrosslistedCourses(json.duplicateCrosslistedCourses),
      select: json => JSON.parse(json.configs[0]?.value ?? 'false'),
    },
  );

  const duplicateCourse = async () => {
    const { course, crossListed, reserves } = data;
    const { courseListingObject: courseListing } = course;

    const newCourseListing = await ky.post('coursereserves/courselistings', { json: {
      courseTypeId: courseListing.courseTypeId,
      externalId: courseListing.externalId,
      locationId: courseListing.locationId,
      registrarId: courseListing.registrarId,
      servicepointId: courseListing.servicepointId,
      termId: term,
    } }).json();

    // The for-loops in this function wait for each POST to return before firing the next one.
    // This approach was used because of my (Mark Deutsch) issues when writing node.js programs
    // that POST courses into mod-courses. In my experience, the connection would drop intermittently
    // when "lots" of requests were fired concurrently. I don't necessarily believe this was Folio,
    // I think it was more an issue of the client's connection throwing the ECONNRESET errors.
    // But since this is also a spot where we could fire a bunch of requests at once, I feel it's probably
    // safer (if a tad - hopefully imperceptibly so - slower).
    // Future Developer, feel free to convert these to Promise.all() and test it out yourself, but I beg that
    // you test with at least 10 instructors, 10 reserves, 10 crosslisted courses, 10 times. :)
    for (let i = 0; i < courseListing.instructorObjects.length; i++) {
      await ky.post(`coursereserves/courselistings/${newCourseListing.id}/instructors`, { json: {
        courseListingId: newCourseListing.id,
        name: courseListing.instructorObjects[i].name,
        userId: courseListing.instructorObjects[i].userId,
      } }).json();
    }

    for (let i = 0; i < reserves.length; i++) {
      await ky.post(`coursereserves/courselistings/${newCourseListing.id}/reserves`, { json: {
        courseListingId: newCourseListing.id,
        itemId: reserves[i].itemId,
      } }).json();
    }

    const newCourse = await ky.post(`coursereserves/courselistings/${newCourseListing.id}/courses`, { json: {
      courseListingId: newCourseListing.id,
      courseNumber: course.courseNumber,
      departmentId: course.departmentId,
      description: course.description,
      name: `${course.name} - ${intl.formatMessage({ id: 'ui-courses.duplicateCourse.duplicatedCourseIndicator' })}`,
      sectionName: course.sectionName,
    } }).json();

    if (duplicateCrosslistedCourses) {
      for (let i = 0; i < crossListed.length; i++) {
        await ky.post(`coursereserves/courselistings/${newCourseListing.id}/courses`, { json: {
          courseListingId: newCourseListing.id,
          courseNumber: crossListed[i].courseNumber,
          departmentId: crossListed[i].departmentId,
          description: crossListed[i].description,
          name: `${crossListed[i].name} - ${intl.formatMessage({ id: 'ui-courses.duplicateCourse.duplicatedCourseIndicator' })}`,
          sectionName: crossListed[i].sectionName,
        } }).json();
      }
    }

    history.push(`/cr/courses/${newCourse.id}`);

    onClose();
  };

  return (
    <Modal
      dismissible
      id="duplicate-course-modal"
      label={<FormattedMessage id="ui-courses.duplicateCourse" />}
      onClose={onClose}
      open={open}
    >
      <Select
        autoFocus
        dataOptions={terms}
        fullWidth
        data-test-select-term-for-duplicate-course
        label={<FormattedMessage id="ui-courses.field.term" />}
        onChange={e => setTerm(e.target.value)}
        required
        value={term}
      />
      <Checkbox
        checked={duplicateCrosslistedCourses}
        data-test-checkbox-duplicate-crosslisted-courses
        label={<FormattedMessage id="ui-courses.duplicateCourse.duplicateCrosslistedCourses" />}
        onChange={e => setDuplicateCrosslistedCourses(e.target.checked)}
      />
      <Button
        disabled={term === undefined}
        fullWidth
        data-test-duplicate-modal-clickable-duplicate
        onClick={duplicateCourse}
      >
        <FormattedMessage id="ui-courses.button.createDuplicateCourses" />
      </Button>
    </Modal>
  );
};

const CoursePropType = PropTypes.shape({
  courseListingObject: PropTypes.shape({
    courseTypeId: PropTypes.string,
    externalId: PropTypes.string,
    locationId: PropTypes.string,
    instructorObjects: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      userId: PropTypes.string,
    })),
    registrarId: PropTypes.string,
    servicepointId: PropTypes.string,
  }),
  courseNumber: PropTypes.string,
  departmentId: PropTypes.string,
  description: PropTypes.string,
  name: PropTypes.string,
  sectionName: PropTypes.string,
});

DuplicateCourseModal.propTypes = {
  data: PropTypes.shape({
    course: CoursePropType.isRequired,
    crossListed: PropTypes.arrayOf(CoursePropType).isRequired,
    reserves: PropTypes.arrayOf(PropTypes.shape({
      itemId: PropTypes.string,
    })).isRequired,
  }),
  history: PropTypes.object,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool,
};

export default DuplicateCourseModal;
