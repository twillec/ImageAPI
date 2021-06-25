import { checkForImage, convertImage } from '../utilites/imageFunctions';
import express from 'express';
const route = express.Router();

route.get('/', async (req: express.Request, res: express.Response): Promise<unknown> => {
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
			const height = parseInt(req.query.height as string);
			const width = parseInt(req.query.width as string);
			if(isNaN(height) || isNaN(width)) {
				res.statusCode = 400;
				return res.send('There was an error with the width or height values. Please double check your input and try again.');
			}
			const imagePath = await convertImage(
				req.query.image as string,
				height,
				width
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
export default route;
