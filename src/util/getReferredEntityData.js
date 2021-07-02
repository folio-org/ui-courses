const getReferredEntityData = (state) => {
  if (state) {
    return {
      name: state.entityName,
      type: state.entityType,
      id: state.entityId,
    };
  }

  return null;
};

export default getReferredEntityData;
