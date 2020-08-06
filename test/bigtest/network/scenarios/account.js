export default server => {
  server.get('/accounts', {
    accounts: [{
      id: 'accounts id',
    }],
    totalRecords: 1,
  });
};
