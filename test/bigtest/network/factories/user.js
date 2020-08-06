import { Factory } from 'miragejs';
import faker from 'faker';

export default Factory.extend({
  username: () => faker.internet.userName()
});
