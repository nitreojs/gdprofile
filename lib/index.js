const fetch = require('node-fetch');

class GD {
  search() {
    if (!this) {
      const error = new TypeError('Parameters are required');
      throw error;
    }
  }
}
const { search } = new GD();

console.log(search());
