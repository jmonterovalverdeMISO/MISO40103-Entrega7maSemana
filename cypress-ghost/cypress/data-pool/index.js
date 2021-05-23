import AprioriPool from "./apriori";
import DynamicPool from "./dynamic";
import RandomPool from "./random";

class DataPool {
  constructor() {
    this.pools = {
      apriori: new AprioriPool(),
      random: new RandomPool(),
      dinamyc: new DynamicPool()
    };
  }

  get apriori() {
    return this.pools.apriori;
  }

  get random() {
    return this.pools.random;
  }

  get dynamic() {
    return this.pools.dynamic;
  }
}

export default DataPool;
