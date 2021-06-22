import { promises as fspromises } from 'fs';

import path from 'path';
import sharp from 'sharp';

const checkForImage = async (
	imageTitle: string,
	height: number,
	width: number
): Promise<string | null> => {
	const filePath = path.join(
		__dirname,
		'../images/thumbs/',
		`${imageTitle.toLowerCase()}(${width}x${height}).jpg`
	);
	try {
		await fspromises.readFile(filePath, { flag: 'r' });
		return filePath;
	} catch {
		return null;
	}
};
const convertImage = async (
	imageTitle: string,
	height: number,
	width: number
): Promise<string> => {
	const filePath = path.join(
		__dirname,
		'../images/',
		`${imageTitle.toLowerCase()}.jpg`
	);
	const outputPath = path.join(
		__dirname,
		'../images/thumbs/',
		`${imageTitle.toLowerCase()}(${width}x${height}).jpg`
	);
	let image: fspromises.FileHandle;
	try {
		image = await fspromises.open(filePath, 'r');
	} catch {
		throw new Error('Image not found');
	}

	try {
		await sharp(await image.readFile())
			.resize({ width, height })
			.toFile(outputPath);
		image.close();
	} catch {
		image.close();
		throw new Error('Unable to convert Image');
	}
	return outputPath;
};
export { checkForImage, convertImage };
