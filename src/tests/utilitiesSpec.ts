/* eslint-disable no-undef */
import path from 'path';
import { convertImage } from '../utilities';

describe('A suite to test utilites', () => {
	it('returns an image path for fjord', async () => {
		const outputPath = path.join(
			__dirname,
			'../../images/thumbs/',
			`fjord(200x200).jpg`
		);
		expect(await convertImage('fjord', 200, 200)).toBe(outputPath);
	});
});
