"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var app = express_1.default();
var port = 3000;
var imgPath = path_1.default.join(__dirname, '../images');
app.listen(port);
app.get('/', function (req, res) {
    res.send('This is a test');
});
app.get('/file', function (req, res) {
    res.sendFile('/fjord.jpg', { 'root': imgPath });
});
