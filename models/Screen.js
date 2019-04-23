const Schema = require('mongoose').Schema;
const model = require('mongoose').model;

const schema = new Schema({
    width: 'number',
    height: 'number',
    label: 'string'
});

module.exports = model('Screen', schema);
