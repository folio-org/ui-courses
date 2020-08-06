export default server => {
  const item = {
    id : 'item id',
    title : 'title',
    barcode : 'barcode',
    callNumber : 'call number',
    enumeration : 'enumeration',
    chronology : 'chronology',
  };

  server.post('/circulation/check-in-by-barcode', {
    loan : {
      id : 'loan id',
      itemId : item.id,
      item,
    },
    item,
  });
};
