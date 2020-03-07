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
  terms: {
    type: 'okapi',
    path: 'coursereserves/terms',
    shouldRefresh: () => false,
  },
  locations: {
    type: 'okapi',
    path: 'locations?limit=500&query=cql.allRecords=1 sortby name',
    shouldRefresh: () => false,
  },
  processingStatuses: {
    type: 'okapi',
    path: 'coursereserves/processingstatuses',
    shouldRefresh: () => false,
  },
};

export default manifest;
