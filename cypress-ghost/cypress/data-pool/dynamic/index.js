import fs from 'fs';
import faker from 'faker';

class DynamicPool {
  getTags(quantity) {
    try {
      const tags = JSON.parse(fs.readFileSync('./schemas/tags.json'));

      const index = faker.datatype.number(tags.length - quantity);
  
      return tags.splice(index, index + quantity);
    } catch (error) {
      return [];
    }
  }

  getDirtyTags(quantity) {
    try {
      const tags = JSON.parse(fs.readFileSync('./schemas/tags-dirty.json'));

      const index = faker.datatype.number(tags.length - quantity);
  
      return tags.splice(index, index + quantity);
    } catch (error) {
      return [];
    }
  }
}

export default DynamicPool;
