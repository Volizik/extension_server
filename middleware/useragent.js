const ua = require('useragent-generator');


function generate(browser, version, os) {
    return ua[browser]({version, os});
}

module.exports.generate = generate;
