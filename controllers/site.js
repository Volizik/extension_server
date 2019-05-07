const WebGLModel = require('../models/WebGL');
const MemoryModel = require('../models/Memory');
const HardwareConcurrencyModel = require('../models/HardwareConcurrency');
const LanguagesModel = require('../models/Languages');
const BrowserModel = require('../models/Browser');
const OSModel = require('../models/OS');
const ScreenModel = require('../models/Screen');
const DoNotTrackModel = require('../models/DoNotTrack');
const ComputerInfoModel = require('../models/ComputerInfo');


const ipInfo = require('../middleware/ipInfo');
const useragent = require('../middleware/useragent');
const saltGenerator = require('../middleware/saltGenerator');

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
    const doNotTrack = DoNotTrackModel.find({}, (err, res) => {
        response.doNotTrack = res;
    });

    await Promise.all([browsers, webGL, memory, hardwareConcurrency, os, languages, screen, doNotTrack])
        .then(() => ctx.body = response);
};

module.exports.saveComputerInfo = async ctx => {
    let res = {};
    res.canvas = {};
    let useragentData = {};
    const {
        proxy_protocol,
        proxy_address,
        proxy_port,
        proxy_login,
        proxy_password,
        ...other } = ctx.request.body;

    const ipInfoPromise = ipInfo(proxy_address, ({timezone, language}) => {
        res.timezone = timezone;
        res.language = language;
    });
    const osPromise = OSModel.findById(other.os, (err, data) => useragentData.os = data.release);
    const browserPromise = BrowserModel.findById(other.browser, (err, data) => {
        useragentData.browser = data.name;
        useragentData.version = data.version;
    });

    await Promise.all([osPromise, browserPromise, ipInfoPromise]);

    res.proxy = {
        protocol: proxy_protocol,
        ip: proxy_address,
        port: proxy_port,
        login: proxy_login,
        password: proxy_password
    };
    res.useragent = useragent.generate(useragentData.browser, useragentData.version, useragentData.os);
    res.webglSalt = saltGenerator.webgl();
    res.canvas.salt = saltGenerator.canvas();
    res = Object.assign(res, other);

    ComputerInfoModel.create(res);
    ctx.body = {status: 'OK'};
};

module.exports.getSavedComputers = async ctx => {
    ctx.body = await ComputerInfoModel.find({})
        .populate('screen')
        .populate('hardwareConcurrency')
        .populate('webgl')
        .populate('languages')
        .populate('browser')
        .populate('memory')
        .populate('doNotTrack')
        .populate('os');
};

module.exports.removeComputer = async ctx => {
    const { id } = ctx.request.body;

    ctx.body = await ComputerInfoModel.findByIdAndRemove(id);
};
