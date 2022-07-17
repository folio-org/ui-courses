import React from 'react';

import {
  useHistory,
  useLocation,
  useRouteMatch,
} from 'react-router-dom';

import { NoteViewPage } from '@folio/stripes/smart-components';

import getReferredEntityData from '../util/getReferredEntityData';

const NoteViewRoute = () => {
  const history = useHistory();
  const location = useLocation();
  const match = useRouteMatch();

  const state = location.state;
  const noteId = match.params.id;

  const referredEntityData = getReferredEntityData(state);

  const onEdit = () => {
    history.replace({
      pathname: `/cr/courses/notes/${match.params.id}/edit`,
      state,
    });
  };

  const navigateBack = () => {
    if (state) {
      history.goBack();
    } else {
      history.push({
        pathname: '/courses',
      });
    }
  };

  return (
    <NoteViewPage
      entityTypeTranslationKeys={{ course: 'ui-courses.course' }}
      entityTypePluralizedTranslationKeys={{ course: 'ui-courses.course.pluralized' }}
      navigateBack={navigateBack}
      onEdit={onEdit}
      paneHeaderAppIcon="courses"
      referredEntityData={referredEntityData}
      noteId={noteId}
    />
  );
};

export default NoteViewRoute;
