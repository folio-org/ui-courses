import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { useOkapiKy, CalloutContext } from '@folio/stripes/core';
import { Button, Modal, ModalFooter } from '@folio/stripes/components';

const DeleteCourseModal = ({ data, history, onClose, open }) => {
  const callout = useContext(CalloutContext);
  const ky = useOkapiKy();

  const deleteCourse = async () => {
    // ky will throw an exception unless all is well, so no need to check
    await ky.delete(`coursereserves/courses/${data.course.id}`);
    if (data.crossListed.length === 0) {
      await ky.delete(`coursereserves/courselistings/${data.course.courseListingId}`);
      console.log(data.course);
      const values = { name: data.course.name, number: data.course.courseNumber }
      callout.sendCallout({
        type: 'success',
        message: <FormattedMessage id="ui-courses.courseDeleted" values={values} />,
      });
    }

    history.push('/cr/courses/');
  };

  const renderModalFooter = () => {
    return (
      <ModalFooter>
        <Button buttonStyle="primary" autoFocus onClick={deleteCourse}>
          <FormattedMessage id="ui-courses.button.delete" />
        </Button>
        <Button onClick={onClose}>
          <FormattedMessage id="ui-courses.button.cancel" />
        </Button>
      </ModalFooter>
    );
  };

  return (
    <Modal
      dismissible
      id="delete-course-modal"
      label={<FormattedMessage id="ui-courses.reallyDelete" />}
      onClose={onClose}
      open={open}
      footer={renderModalFooter()}
    >
      <p>
        <b>{data.course.name}</b>
        <br />
        course number
        {' '}
        <b>{data.course.courseNumber}</b>
      </p>
      <p>{data.course.description}</p>
    </Modal>
  );
};

DeleteCourseModal.propTypes = {
  data: PropTypes.shape({
    course: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      courseNumber: PropTypes.string,
      description: PropTypes.string,
      courseListingId: PropTypes.string.isRequired,
    }).isRequired,
    crossListed: PropTypes.array.isRequired,
  }),
  history: PropTypes.object,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool,
};

export default DeleteCourseModal;
