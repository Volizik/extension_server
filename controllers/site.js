const WebGLModel = require('../models/WebGL');
const MemoryModel = require('../models/Memory');
const HardwareConcurrencyModel = require('../models/HardwareConcurrency');
const LanguagesModel = require('../models/Languages');
const BrowserModel = require('../models/Browser');
const OSModel = require('../models/OS');
const ScreenModel = require('../models/Screen');
const ComputerInfoModel = require('../models/ComputerInfo');

const ipInfo = require('../middleware/ipInfo');
const useragent = require('../middleware/useragent');

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

module.exports.saveComputerInfo = async ctx => {
    const {
        screen,
        hardwareConcurrency,
        memory,
        webgl,
        languages,
        browser,
        os,
        proxy_protocol,
        proxy_address,
        proxy_port,
        proxy_login,
        proxy_password,
        ...other } = ctx.request.body;
    let res = {};

    const { timezone } = await ipInfo(proxy_address);

    const screenPromise = ScreenModel.findById(screen, (err, response) => {
        res.screen = response;
    });
    const hardwareConcurrencyPromise = HardwareConcurrencyModel.findById(hardwareConcurrency, (err, response) => {
        res.hardwareConcurrency = response;
    });
    const memoryPromise = MemoryModel.findById(memory, (err, response) => {
        res.memory = response;
    });
    const webglPromise = WebGLModel.findById(webgl, (err, response) => {
        res.webgl = response;
    });
    const languagesPromise = LanguagesModel.find({'_id': {$in: languages}}, (err, response) => {
        res.languages = response;
    });
    const browserPromise = BrowserModel.findById(browser, (err, response) => {
        res.browser = response;
    });
    const osPromise = OSModel.findById(os, (err, response) => {
        res.os = response;
    });

    await Promise.all([
        screenPromise,
        hardwareConcurrencyPromise,
        memoryPromise,
        webglPromise,
        languagesPromise,
        browserPromise,
        osPromise
    ]);

    res.timezone = timezone;
    res.proxy = {
        protocol: proxy_protocol,
        ip: proxy_address,
        port: proxy_port,
        login: proxy_login,
        password: proxy_password
    };
    res.useragent = useragent.generate(res.browser.name, res.browser.version, res.os.release);
    res = Object.assign(res, other);
    ComputerInfoModel.create(res);
    ctx.body = res;
};
