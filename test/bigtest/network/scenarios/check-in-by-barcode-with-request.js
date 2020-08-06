export default (server) => {
  const item = {
    id : 'itemId',
    title : 'title',
    barcode : 'barcode',
    callNumber : 'call number',
    enumeration : 'enumeration',
    chronology : 'chronology',
  };

  server.create('item', item);

  const staffSlipContext = {
    item,
    request : {
      requestID : 'requestID',
      servicePointPickup : 'Circ Desk 2',
    },
    requester : {
      firstName : 'Luther',
      lastName : 'Auer',
      barcode : '680311830975018',
    }
  };

  server.post('/circulation/check-in-by-barcode', {
    item,
    staffSlipContext,
  });
};
