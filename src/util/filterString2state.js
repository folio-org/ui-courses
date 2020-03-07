// For some reason, neither initialFilterState nor filterState works for me
function filterString2state(filters) {
  const state = {};

  if (filters) {
    filters.split(',').forEach(fullName => {
      const [group, value] = fullName.split('.');
      if (!state[group]) state[group] = [];
      state[group].push(value);
    });
  }

  return state;
}

export default filterString2state;
