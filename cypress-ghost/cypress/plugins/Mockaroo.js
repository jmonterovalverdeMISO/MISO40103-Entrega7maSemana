const fetch = require('node-fetch');

class Mockaroo {
  constructor() {
    this.apiUrl = 'https://api.mockaroo.com/api';
    this.token = 'da7fad10';
  }

  async generateFromSchema(name, count = 100) {
    const url = `${this.apiUrl}/generate.json?key=${this.token}&schema=${name}&count=${count}`;

    const response = await fetch(url, {
      method: 'POST'
    });

    const json = await response.json();

    if (json.error) {
      throw new Error(json.error);
    }

    return json.map((el) => ({
      ...el,
      createdAt: new Date().toISOString()
    }))
  }
}

module.exports = Mockaroo;