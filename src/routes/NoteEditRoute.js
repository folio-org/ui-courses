import React from 'react';

import {
  useHistory,
  useLocation,
  useRouteMatch,
} from 'react-router-dom';

import { NoteEditPage } from '@folio/stripes/smart-components';

import retrieveNoteReferredEntityDataFromLocationState from '../util/retrieveNoteReferredEntityDataFromLocationState';

const NoteEditRoute = () => {
  const history = useHistory();
  const location = useLocation();
  const match = useRouteMatch();

  const state = location.state;
  const noteId = match.params.id;

  const referredEntityData = retrieveNoteReferredEntityDataFromLocationState(state);

  const navigateBack = () => {
    const path = state ? history.goBack() : '/users';

    history.push(path);
  };

  return (
    <NoteEditPage
      referredEntityData={referredEntityData}
      entityTypeTranslationKeys={{ course: 'ui-courses.course' }}
      entityTypePluralizedTranslationKeys={{ course: 'ui-courses.course.pluralized' }}
      paneHeaderAppIcon="courses"
      domain="courses"
      navigateBack={navigateBack}
      noteId={noteId}
      showDisplayAsPopupOptions
    />
  );
};

export default NoteEditRoute;
