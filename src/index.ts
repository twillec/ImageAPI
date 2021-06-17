import express from 'express';
import path from 'path';
import { checkForImage, convertImage } from './utilities';

const app = express();
const port = 3000;
const imgPath = path.join(__dirname, '../images');

app.listen(port);

app.get('/', (req, res) => {
	res.send('This is a test');
});

app.get('/convert', async (req, res) => {
	if (!req.query.image || !req.query.width || !req.query.height) {
		res.statusCode = 400;
		return res.send(
			'400: Request was not valid. Please include a valid image title, and the width and height that you want to convert the image to.'
		);
	}
	const returnedImage = await checkForImage(
		req.query.image as string,
		parseInt(req.query.height as string),
		parseInt(req.query.width as string)
	);
	if (returnedImage) {
		res.sendFile(returnedImage);
	} else {
		try {
			console.log('converting old image');
			const imagePath = await convertImage(
				req.query.image as string,
				parseInt(req.query.height as string),
				parseInt(req.query.width as string)
			);
			res.sendFile(imagePath);
		} catch (e) {
			const error = e as Error;
			if (error.message == 'Image not found') {
				res.statusCode = 404;
				res.send(
					'404: Image not found. Please provide a valid image file'
				);
			} else {
				res.send('There was an error converting the file');
			}
		}
	}
});
export default app;
