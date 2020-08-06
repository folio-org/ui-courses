import { Factory } from 'miragejs';
import faker from 'faker';

export default Factory.extend({
  id: faker.random.uuid,
  name: faker.random.arrayElement(['Hold', 'Transit']),
  active: true,
  template: '<p>{{Barcode}}</p>',
});
