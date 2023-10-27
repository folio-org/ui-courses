import React from 'react';

import {
  useHistory,
  useLocation,
  useRouteMatch,
} from 'react-router-dom';

import { NoteEditPage } from '@folio/stripes/smart-components';

import getReferredEntityData from '../util/getReferredEntityData';

const NoteEditRoute = () => {
  const history = useHistory();
  const location = useLocation();
  const match = useRouteMatch();

  const state = location.state;
  const noteId = match.params.id;

  const referredEntityData = getReferredEntityData(state);

  const navigateBack = () => {
    const path = state ? history.goBack() : '/cr';

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
    />
  );
};

export default NoteEditRoute;
