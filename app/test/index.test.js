const index = require('./../index');
const request = require('supertest');

describe('GET /', () => {
	it('serves homepage', (done) => {
		request(index).get('/')
		.expect(200)
		done();
	})
})