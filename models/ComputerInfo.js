const Schema = require('mongoose').Schema;
const model = require('mongoose').model;

// const schema = new Schema({
//     name: 'string',
//     screen: {type: Schema.Types.ObjectId, ref: 'Screen' },
//     hardwareConcurrency: {type: Schema.Types.ObjectId, ref: 'HardwareConcurrency' },
//     memory: {type: Schema.Types.ObjectId, ref: 'Memory' },
//     webgl: {type: Schema.Types.ObjectId, ref: 'WebGL' },
//     languages: [{type: Schema.Types.ObjectId, ref: 'Languages' }],
//     browser: {type: Schema.Types.ObjectId, ref: 'Browser' },
//     os: {type: Schema.Types.ObjectId, ref: 'OS' },
//     proxy: {
//         ip: 'string',
//         login: 'string',
//         password: 'string',
//         port: 'string',
//         protocol: 'string'
//     },
//     timezone: {
//         countries: ['string'],
//         name: 'string',
//         offsetStr: 'string',
//         utcOffset: 'number'
//     }
// });
const schema = new Schema({
    name: 'string',
    screen: 'object',
    hardwareConcurrency: 'object',
    memory: 'object',
    webgl: 'object',
    languages: ['object'],
    browser: 'object',
    os: 'object',
    proxy: 'object',
    timezone: 'object',
    useragent: 'string'
});

module.exports = model('ComputerInfo', schema);
