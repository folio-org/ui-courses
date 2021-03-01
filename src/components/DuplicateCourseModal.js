import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, useIntl } from 'react-intl';
import { useQuery } from 'react-query';

import { Button, Checkbox, Modal, Select } from '@folio/stripes/components';
import { useOkapiKy } from '@folio/stripes/core';


import manifest from '../util/manifest';

const DuplicateCourseModal = ({ data, history, onClose }) => {
  const intl = useIntl();
  const ky = useOkapiKy();

  const [term, setTerm] = useState();
  const { data: terms } = useQuery(
    ['ui-courses', 'terms'],
    () => ky(manifest.terms.path).json(),
    {
      placeholderData: [],
      onSuccess: data => setTerm(data[0]?.value),
      select: data => ((data?.terms ?? [])
        .map(t => ({ value: t.id, label: t.name }))
        .sort((a, b) => a.label.localeCompare(b.label))
      )
    }
  );

  const [duplicateCrosslistedCourses, setDuplicateCrosslistedCourses] = useState(false);
  useQuery(
    ['ui-courses', 'duplicateCrosslistedCourses'],
    () => ky(manifest.displaySettings.path).json(),
    {
      onSuccess: data => setDuplicateCrosslistedCourses(data.duplicateCrosslistedCourses),
      select: data => JSON.parse(data.configs[0].value),
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
      name: `${course.name} - ${intl.formatMessage({ id: 'ui-courses.button.duplicate' })}`,
      sectionName: course.sectionName,
    } }).json();

    if (duplicateCrosslistedCourses) {
      for (let i = 0; i < crossListed.length; i++) {
        await ky.post(`coursereserves/courselistings/${newCourseListing.id}/courses`, { json: {
          courseListingId: newCourseListing.id,
          courseNumber: crossListed[i].courseNumber,
          departmentId: crossListed[i].departmentId,
          description: crossListed[i].description,
          name: `${crossListed[i].name} - ${intl.formatMessage({ id: 'ui-courses.button.duplicate' })}`,
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
      label={<FormattedMessage id="ui-courses.duplicateCourse" />}
      onClose={onClose}
      open
    >
      <Select
        autoFocus
        dataOptions={terms}
        fullWidth
        label={<FormattedMessage id="ui-courses.field.term" />}
        onChange={e => setTerm(e.target.value)}
        required
        value={term}
      />
      <Checkbox
        checked={duplicateCrosslistedCourses}
        label={<FormattedMessage id="ui-courses.duplicateCourse.duplicateCrosslistedCourses" />}
        onChange={e => setDuplicateCrosslistedCourses(e.target.checked)}
      />
      <Button fullWidth onClick={duplicateCourse}>
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
};

export default DuplicateCourseModal;
