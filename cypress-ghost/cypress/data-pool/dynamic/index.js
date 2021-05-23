import tags from './schemas/tags.json';
import dirtyTags from './schemas/tags-dirty.json';
import faker from 'faker';

class DynamicPool {
  getTags(quantity = 25) {
    try {
      const index = faker.datatype.number(tags.length - quantity);

      return tags.splice(index, quantity);
    } catch (error) {
      return [];
    }
  }

  getDirtyTags(quantity = 25) {
    try {
      const index = faker.datatype.number(dirtyTags.length - quantity);

      return dirtyTags.splice(index, quantity);
    } catch (error) {
      return [];
    }
  }
}

export default DynamicPool;
