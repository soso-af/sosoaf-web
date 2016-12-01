var request = require('supertest');
describe('loading express', function () {
  var server;
  beforeEach(function () {
    server = require('./server');
  });
  afterEach(function () {
    server.close();
  });
  it('responds to /', function testRoot(done) {
  request(server)
    .get('/')
    .expect(200, done);
  });
});
