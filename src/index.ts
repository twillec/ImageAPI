import express from 'express';
import {promises as fspromises} from "fs";
import path from 'path';


const app = express();
const port = 3000;
const imgPath = path.join(__dirname, '../images');

app.listen(port);

app.get('/', (req, res) => {
    res.send('This is a test');
});

app.get('/file', (req, res) => {
    res.sendFile('/fjord.jpg', {'root': imgPath});
});