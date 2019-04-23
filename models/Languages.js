const Schema = require('mongoose').Schema;
const model = require('mongoose').model;

const schema = new Schema({
    language: 'string',
    dialect: {
        required: false,
        type: 'string'
    }
});

module.exports = model('Languages', schema);
