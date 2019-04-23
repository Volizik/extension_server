const WebGLModel = require('../models/WebGL');
const MemoryModel = require('../models/Memory');
const HardwareConcurrencyModel = require('../models/HardwareConcurrency');
const LanguagesModel = require('../models/Languages');
const BrowserModel = require('../models/Browser');
const OSModel = require('../models/OS');
const ScreenModel = require('../models/Screen');

module.exports.getAllComputersInfo = async ctx => {
    let response = {};

    const webGL = WebGLModel.find({}, (err, res) => {
        response.webgl = res;
    });
    const memory = MemoryModel.find({}, (err, res) => {
        response.memory = res;
    });
    const hardwareConcurrency = HardwareConcurrencyModel.find({}, (err, res) => {
        response.hardwareConcurrency = res;
    });
    const languages = LanguagesModel.find({}, (err, res) => {
        response.languages = res;
    });
    const browsers = BrowserModel.find({}, (err, res) => {
        response.browsers = res;
    });
    const os = OSModel.find({}, (err, res) => {
        response.os = res;
    });
    const screen = ScreenModel.find({}, (err, res) => {
        response.screen = res;
    });

    await Promise.all([browsers, webGL, memory, hardwareConcurrency, os, languages, screen])
        .then(() => ctx.body = response);
};
