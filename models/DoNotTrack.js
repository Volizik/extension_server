const Schema = require('mongoose').Schema;
const model = require('mongoose').model;

const schema = new Schema({
    value: 'string'
});

module.exports = model('DoNotTrack', schema);
