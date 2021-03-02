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

    await Promise.all(
      courseListing.instructorObjects.map(instructor => ky.post(`coursereserves/courselistings/${newCourseListing.id}/instructors`, { json: {
        courseListingId: newCourseListing.id,
        name: instructor.name,
        userId: instructor.userId,
      } }).json())
    );

    await Promise.all(
      reserves.map(reserve => ky.post(`coursereserves/courselistings/${newCourseListing.id}/reserves`, { json: {
        courseListingId: newCourseListing.id,
        itemId: reserve.itemId,
      } }).json())
    );

    const newCourse = await ky.post(`coursereserves/courselistings/${newCourseListing.id}/courses`, { json: {
      courseListingId: newCourseListing.id,
      courseNumber: course.courseNumber,
      departmentId: course.departmentId,
      description: course.description,
      name: `${course.name} - ${intl.formatMessage({ id: 'ui-courses.duplicateCourse.duplicatedCourseIndicator' })}`,
      sectionName: course.sectionName,
    } }).json();

    if (duplicateCrosslistedCourses) {
      await Promise.all(
        crossListed.map(crossListedCourse => ky.post(`coursereserves/courselistings/${newCourseListing.id}/courses`, { json: {
          courseListingId: newCourseListing.id,
          courseNumber: crossListedCourse.courseNumber,
          departmentId: crossListedCourse.departmentId,
          description: crossListedCourse.description,
          name: `${crossListedCourse.name} - ${intl.formatMessage({ id: 'ui-courses.duplicateCourse.duplicatedCourseIndicator' })}`,
          sectionName: crossListedCourse.sectionName,
        } }).json())
      );
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
