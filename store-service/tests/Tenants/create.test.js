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
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const http_status_codes_1 = require("http-status-codes");
const jest_setup_1 = require("../jest.setup");
const globals_2 = require("@jest/globals");
const database_1 = require("../../src/database");
(0, globals_1.describe)('Tenants - create', function () {
    (0, globals_2.afterAll)(() => __awaiter(this, void 0, void 0, function* () {
        yield database_1.AppDataSource.destroy();
    }));
    (0, globals_1.it)('create register', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield jest_setup_1.testServer.post('/api/tenants').send({
                "registerId": "45632158989879",
                "fullName": "Chris",
                "phoneNumber": "123-456-7890",
                "subscription": 1,
                "payment": 100,
                "planValue": 50,
                "stores": [
                    {
                        "storePhone": "19987565478",
                        "storeName": "chrislanches",
                        "workTime": "08-18",
                        "categoryId": null,
                        "description": "seeeeee",
                        "imageUrl": "",
                        "color": "flknf",
                        "logo": ""
                    }
                ]
            });
            (0, globals_1.expect)(res.statusCode).toEqual(http_status_codes_1.StatusCodes.CONFLICT);
        });
    });
});
