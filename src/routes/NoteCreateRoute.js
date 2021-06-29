import React from 'react';
import { Redirect, useHistory, useLocation } from 'react-router-dom';

import { NoteCreatePage } from '@folio/stripes/smart-components';

const retrieveNoteReferredEntityDataFromLocationState = (state) => {
  if (state) {
    return {
      name: state.entityName,
      type: state.entityType,
      id: state.entityId,
    };
  }

  return null;
};

const renderCreatePage = (history, state) => {
  const referredRecordData = retrieveNoteReferredEntityDataFromLocationState(state);

  return (
    <NoteCreatePage
      referredEntityData={referredRecordData}
      entityTypeTranslationKeys={{ course: 'ui-courses.course' }}
      paneHeaderAppIcon="courses"
      domain="courses"
      navigateBack={history.goBack}
    />
  );
};

const NoteCreateRoute = () => {
  const history = useHistory();
  const location = useLocation();

  return location.pathname
    ? renderCreatePage(history, location.state)
    : <Redirect to="/courses" />;
};

export default NoteCreateRoute;
