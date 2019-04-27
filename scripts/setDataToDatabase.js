const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const WebGLModel = require('../models/WebGL');
const MemoryModel = require('../models/Memory');
const HardwareConcurrencyModel = require('../models/HardwareConcurrency');
const LanguagesModel = require('../models/Languages');
const BrowserModel = require('../models/Browser');
const OSModel = require('../models/OS');
const ScreenModel = require('../models/Screen');
const ComputerInfoSelectionModel = require('../models/ComputerInfoSelection');

function run() {
    mongoose.connect(`${process.env.DB_HOST}`, { useNewUrlParser: true })
        .then(() => {
            console.log('MongoDB connected');
            webGl();
            browser();
            memory();
            hardwareConcurrency();
            language();
            os();
            screen();
        })
        .catch((err) => console.log(err));
}

function webGl() {
    WebGLModel.create({
        unmasked_vendor: 'Google Inc.',
        unmasked_renderer: 'ANGLE (AMD Radeon(TM) HD 6520G Direct3D9Ex vs_3_0 ps_3_0)'
    });
    WebGLModel.create({
        unmasked_vendor: 'Google Inc.',
        unmasked_renderer: 'ANGLE (NVIDIA GeForce GT 240 Direct3D11 vs_4_1 ps_4_1)'
    });
    WebGLModel.create({
        unmasked_vendor: 'Google Inc.',
        unmasked_renderer: 'ANGLE (Intel(R) HD Graphics Direct3D11 vs_4_1 ps_4_1)'
    });
    WebGLModel.create({
        unmasked_vendor: 'X.Org',
        unmasked_renderer: 'AMD SUMO (DRM 2.50.0 / 4.13.0-45-generic, LLVM 6.0.0)'
    });
    WebGLModel.create({
        unmasked_vendor: 'Intel Open Source Technology Center',
        unmasked_renderer: 'Mesa DRI Intel(R) UHD Graphics 620 (Kabylake GT2)'
    });
}

function browser() {
    BrowserModel.create({
        name: 'chrome',
        version: '61.0.0',
    });
    BrowserModel.create({
        name: 'chrome',
        version: '73.0.3683',
    });
    BrowserModel.create({
        name: 'chrome',
        version: '72.0.3626',
    });
    BrowserModel.create({
        name: 'chrome',
        version: '71.0.3578',
    });
    BrowserModel.create({
        name: 'chrome',
        version: '70.0.3538',
    });
    BrowserModel.create({
        name: 'chrome',
        version: '69.0.3497',
    });
    BrowserModel.create({
        name: 'firefox',
        version: '66.0.2',
    });
    BrowserModel.create({
        name: 'firefox',
        version: '65.0.1',
    });
    BrowserModel.create({
        name: 'firefox',
        version: '64.0',
    });
    BrowserModel.create({
        name: 'firefox',
        version: '63.0.3',
    });
    BrowserModel.create({
        name: 'firefox',
        version: '62.0.2',
    });
}

function memory() {
    MemoryModel.create({
        value: 1
    });
    MemoryModel.create({
        value: 2
    });
    MemoryModel.create({
        value: 3
    });
    MemoryModel.create({
        value: 4
    });
    MemoryModel.create({
        value: 5
    });
    MemoryModel.create({
        value: 6
    });
    MemoryModel.create({
        value: 7
    });
    MemoryModel.create({
        value: 8
    });
}

function hardwareConcurrency() {
    HardwareConcurrencyModel.create({
        value: 1
    });
    HardwareConcurrencyModel.create({
        value: 2
    });
    HardwareConcurrencyModel.create({
        value: 4
    });
    HardwareConcurrencyModel.create({
        value: 8
    });
}

function language() {
    LanguagesModel.create({
        language: 'ru',
        dialect: 'ru-RU'
    });
    LanguagesModel.create({
        language: 'en',
        dialect: 'en-US'
    });
    LanguagesModel.create({
        language: 'cs',
        dialect: 'cs-CZ'
    });
    LanguagesModel.create({
        language: 'de',
        dialect: 'de-DE'
    });
    LanguagesModel.create({
        language: 'el',
        dialect: 'el-GR'
    });
    LanguagesModel.create({
        language: 'he',
        dialect: 'he-IL'
    });
    LanguagesModel.create({
        language: 'it',
        dialect: 'it-IT'
    });
}

function os() {
    OSModel.create({
        name: 'Windows 10',
        release: 'Windows NT 10.0',
        platform: 'Win32'
    });
    OSModel.create({
        name: 'Windows 8.1',
        release: 'Windows NT 6.3',
        platform: 'Win32'
    });
    OSModel.create({
        name: 'Windows 8',
        release: 'Windows NT 6.2',
        platform: 'Win32'
    });
    OSModel.create({
        name: 'Windows 7',
        release: 'Windows NT 6.1',
        platform: 'Win32'
    });
}

function screen() {
    ScreenModel.create({
        width: 1024,
        height: 768,
        label: '1024x768'
    });
    ScreenModel.create({
        width: 1280,
        height: 960,
        label: '1280x960'
    });
    ScreenModel.create({
        width: 1400,
        height: 1050,
        label: '1400x1050'
    });
    ScreenModel.create({
        width: 1920,
        height: 1440,
        label: '1920x1440'
    });
    ScreenModel.create({
        width: 1920,
        height: 1080,
        label: '1920x1080'
    });
    ScreenModel.create({
        width: 1680,
        height: 1050,
        label: '1680x1050'
    });
}

module.exports.run = run;
