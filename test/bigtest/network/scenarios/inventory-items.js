export default server => {
  server.get('/inventory/items', {
    items : [{
      id : 'item id',
      title : 'title',
      barcode : 'barcode',
      callNumber : 'call number',
      enumeration : 'enumeration',
      chronology : 'chronology',
    }],
    totalRecords : 1
  });
};
