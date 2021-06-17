"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var utilities_1 = require("./utilities");
var app = express_1.default();
var port = 3000;
var imgPath = path_1.default.join(__dirname, '../images');
app.listen(port);
app.get('/', function (req, res) {
    res.send('This is a test');
});
app.get('/convert', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var returnedImage, imagePath, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                if (!req.query.image && !req.query.width && !req.query.height) {
                    res.statusCode = 404;
                    return [2 /*return*/, res.send('404: Image not found')];
                }
                return [4 /*yield*/, utilities_1.checkForImage(req.query.image, parseInt(req.query.height), parseInt(req.query.width))];
            case 1:
                returnedImage = _b.sent();
                if (!returnedImage) return [3 /*break*/, 2];
                res.sendFile(returnedImage);
                return [3 /*break*/, 5];
            case 2:
                _b.trys.push([2, 4, , 5]);
                console.log('converting old image');
                return [4 /*yield*/, utilities_1.convertImage(req.query.image, parseInt(req.query.height), parseInt(req.query.width))];
            case 3:
                imagePath = _b.sent();
                res.sendFile(imagePath);
                return [3 /*break*/, 5];
            case 4:
                _a = _b.sent();
                res.send('There was an error converting the file');
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); });
exports.default = app;
