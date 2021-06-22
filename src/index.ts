import express from 'express';
import routes from './routes';

const app = express();
const port = 3000;

app.listen(port);

app.use('/', routes);

export default app;
