import path from 'path';
import { checkForImage, convertImage } from '../utilities';

describe('A suite to test finding a cached image', () => {
	beforeAll(async () => {
		await convertImage('fjord', 200, 200);
	});
	it('returns a path on a found image', async () => {
		const outputPath = path.join(
			__dirname,
			'../../images/thumbs/',
			`fjord(200x200).jpg`
		);
		expect(await checkForImage('fjord', 200, 200)).toBe(outputPath);
	});
});

describe('A suite to test image conversion', () => {
	it('returns an image path for fjord', async () => {
		const outputPath = path.join(
			__dirname,
			'../../images/thumbs/',
			`fjord(200x200).jpg`
		);
		expect(await convertImage('fjord', 200, 200)).toBe(outputPath);
	});
});
