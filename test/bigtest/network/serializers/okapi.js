import { pluralize, underscore, camelize } from 'inflected';
import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  serialize(...args) {
    const { modelName } = args[0];
    const collectionName = pluralize(camelize(underscore(modelName), false));
    const name = this.name || collectionName;
    const json = ApplicationSerializer.prototype.serialize.apply(this, args);
    const data = json[collectionName];

    return {
      [name]: data,
      totalRecords: data.length,
    };
  }
});
