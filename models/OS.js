const Schema = require('mongoose').Schema;
const model = require('mongoose').model;

const schema = new Schema({
    name: 'string',
    release: 'string',
    platform: 'string'
});

module.exports = model('OS', schema);
