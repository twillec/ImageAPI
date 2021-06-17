import supertest from 'supertest';
import app from '../index';

const request = supertest(app);
describe('Test endpoint responses', () => {
	it('gets the api endpoint', async (done) => {
		const response = await request.get(
			'/convert?image=fjord&width=250&height=250'
		);
		expect(response.status).toBe(200);
		done();
	});
});
