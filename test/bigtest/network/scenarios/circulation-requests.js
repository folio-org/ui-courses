export default server => {
  server.get('/circulation/requests', {
    requests : [],
    totalRecords : 0,
  });
};
