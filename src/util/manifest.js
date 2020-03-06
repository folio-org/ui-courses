// Re-usable pieces of manifest

const manifest = {
  departments: {
    type: 'okapi',
    path: 'coursereserves/departments',
    shouldRefresh: () => false,
  },
  coursetypes: {
    type: 'okapi',
    path: 'coursereserves/coursetypes',
    shouldRefresh: () => false,
  },
};

export default manifest;
