const fetch = require('node-fetch');

class GD {
  // setOptions(options) {
  //   this.type = options.type || 'user';
  //   if (typeof options.id === 'number' || typeof options.name === 'number') this.id = options.id;
  //   else if (typeof options.id === 'string' || typeof options.name === 'string') this.name = options.id;
  //   else {
  //     const error = new TypeError(`The "id" argument must be of type string or number, got ${typeof options.id}`);
  //     throw error;
  //   }
  // }

  search() {
    if (!this) {
      const error = new TypeError('Parameters are required');
      throw error;
    }
  }
}
const { search } = new GD();

console.log(search());
