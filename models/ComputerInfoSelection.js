const Schema = require('mongoose').Schema;
const model = require('mongoose').model;

const schema = new Schema({
    screen: {type: Schema.Types.ObjectId, ref: 'Screen' },
    hardwareConcurrency: {type: Schema.Types.ObjectId, ref: 'HardwareConcurrency' },
    memory: {type: Schema.Types.ObjectId, ref: 'Memory' },
    webgl: {type: Schema.Types.ObjectId, ref: 'WebGL' },
    languages: [{type: Schema.Types.ObjectId, ref: 'Languages' }],
    browsers: {type: Schema.Types.ObjectId, ref: 'Browser' },
    os: {type: Schema.Types.ObjectId, ref: 'OS' }
});

module.exports = model('ComputerInfoSelection', schema);
