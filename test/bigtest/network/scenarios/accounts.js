export default server => {
  server.get('/accounts', {
    accounts: [
      {
        id: 'accounts id #1',
      },
      {
        id: 'accounts id #2',
      },
    ],
    totalRecords: 2,
  });
};
