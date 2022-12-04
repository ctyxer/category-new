"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.catcherErr = exports.addLog = void 0;
const fs_1 = __importDefault(require("fs"));
function addLog(message) {
    fs_1.default.appendFile("./logs/logs.txt", '\n\n[' + new Date() + ']\n' + message, (err) => { });
    console.log('\n' + new Date() + '\n' + message);
}
exports.addLog = addLog;
async function catcherErr(tryFunc, endFunc) {
    try {
        tryFunc();
    }
    catch (err) {
        addLog(String(err));
        if (endFunc != undefined) {
            endFunc();
        }
    }
}
exports.catcherErr = catcherErr;
