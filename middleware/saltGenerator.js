const crypto = require("crypto");

module.exports.canvas = function () {
    return crypto.randomBytes(1).toString('hex');
};

module.exports.webgl = function () {
    return Math.random() * (0.009 - 0.00000001) + 0.00000001;
};

