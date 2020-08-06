import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  embed: true,
  include: ['item', 'user'],

  serialize(...args) {
    const json = ApplicationSerializer.prototype.serialize.apply(this, args);
    json.item = json.loan.item;
    json.loan.userId = json.loan.user.id;
    return json;
  }
});
