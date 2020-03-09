const form = require('./../form');
const request = require('supertest');

describe('GET /volunteer route', () => {
/*	it('serves volunteer form', (done) => {
		request(form).get('/')
		.expect(200)
	});*/
});

describe('POST /volunteer/uploadvf', () => {
	it('writes volunteer form to txt file', (done) => {
		request(form).post('uploadvf')
		.send({text: 'hello123'})
		.expect(200)
		done();
	});
})