const Schema = require('mongoose').Schema;
const model = require('mongoose').model;

const schema = new Schema({
    unmasked_vendor: 'string',
    unmasked_renderer: 'string'
});

module.exports = model('WebGL', schema);
