const Schema = require('mongoose').Schema;
const model = require('mongoose').model;

const schema = new Schema({
    name: 'string',
    version: 'string',
    vendor: 'string',
});

module.exports = model('Browser', schema);
