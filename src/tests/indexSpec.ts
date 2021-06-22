import supertest from 'supertest';
import app from '../index';

const request = supertest(app);
describe('Test endpoint responses', () => {
	it('returns a correct response on a valid request', async () => {
		const response = await request.get(
			'/convert?image=fjord&width=250&height=250'
		);
		expect(response.status).toBe(200);
	});
	it('returns a 404 error on an invalid image', async () => {
		const response = await request.get(
			'/convert?image=incorrect&width=250&height=250'
		);
		expect(response.status).toBe(404);
	});
	it('returns a 400 error on an incomplete request', async () => {
		const response = await request.get('/convert?image=fjord&width=250');
		expect(response.status).toBe(400);
	});
});
