const Schema = require('mongoose').Schema;
const model = require('mongoose').model;

const schema = new Schema({
    name: 'string',
    screen: {type: Schema.Types.ObjectId, ref: 'Screen' },
    hardwareConcurrency: {type: Schema.Types.ObjectId, ref: 'HardwareConcurrency' },
    memory: {type: Schema.Types.ObjectId, ref: 'Memory' },
    webgl: {type: Schema.Types.ObjectId, ref: 'WebGL' },
    language: ['string'],
    languages: [{type: Schema.Types.ObjectId, ref: 'Languages' }],
    browser: {type: Schema.Types.ObjectId, ref: 'Browser' },
    os: {type: Schema.Types.ObjectId, ref: 'OS' },
    proxy: {
        ip: 'string',
        login: 'string',
        password: 'string',
        port: 'string',
        protocol: 'string'
    },
    timezone: {
        name: 'string',
        date: 'string',
        utcOffset: 'number'
    },
    useragent: 'string',
    canvas: {
        salt: 'string'
    },
    doNotTrack: {type: Schema.Types.ObjectId, ref: 'DoNotTrack'},
    webglSalt: 'number',
});

module.exports = model('ComputerInfo', schema);
