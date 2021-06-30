import React from 'react';
import {
  Redirect,
  useHistory,
  useLocation
} from 'react-router-dom';

import { NoteCreatePage } from '@folio/stripes/smart-components';

import retrieveNoteReferredEntityDataFromLocationState from '../util/retrieveNoteReferredEntityDataFromLocationState';

const NoteCreateRoute = () => {
  const history = useHistory();
  const location = useLocation();

  const state = location.state;

  const renderCreatePage = () => {
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

  return location.pathname
    ? renderCreatePage()
    : <Redirect to="/courses" />;
};

export default NoteCreateRoute;
