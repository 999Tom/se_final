const login = require('./../login');
const expect = require('chai');
const request = require('supertest');
const session = require('supertest-session');

let testSession = null;

beforeEach(function () {
  testSession = session(login);
});

describe('POST /login/auth', () => {
	it('accepts valid username and password', (done) => {
		request(login).post('/auth')
		.send({username: 'test', password: 'test'})
		.expect(200)
		done();
	});

	it('does not authorise invalid username but valid password', (done) => {
		request(login).post('auth')
		.send({username: 'invalid_name', password: 'test'})
		.expect(403)
		done();
	});

	it('does not authorise valid username but invalid password', (done) => {
		request(login).post('auth')
		.send({username: 'test', password: 'invalid_password'})
		.expect(403)
		done();
	});

	it('does not authorise invalid username and invalid password', (done) => {
		request(login).post('auth')
		.send({username: 'invalid_name', password: 'invalid_password'})
		.expect(403)
		done();
	});

	it('does not authorise invalid datatype username and invalid password', (done) => {
		request(login).post('auth')
		.send({username: 2, password: 'test'})
		.expect(403)
		done();
	});

	it('does not authorise valid username and invalid datatype password', (done) => {
		request(login).post('auth')
		.send({username: 'test', password: 2})
		.expect(403)
		done();
	});

	it('does not authorise invalid datatype username and invalid datatype password', (done) => {
		request(login).post('auth')
		.send({username: [], password: 2})
		.expect(403)
		done();
	});
});

