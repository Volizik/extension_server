const Schema = require('mongoose').Schema;
const model = require('mongoose').model;

const schema = new Schema({
    value: 'number'
});

module.exports = model('HardwareConcurrency', schema);
