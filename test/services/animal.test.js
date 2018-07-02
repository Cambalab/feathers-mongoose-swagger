const assert = require('assert');
const app = require('../../src/app');

describe('\'animal\' service', () => {
  it('registered the service', () => {
    const service = app.service('animal');

    assert.ok(service, 'Registered the service');
  });
});
