const fetch = require("node-fetch");
const countryLang = require('country-language');
const countryTimezone = require('countries-and-timezones');

module.exports = async function getIpInfo(ip, callback) {
    if (ip.length === 0) return;
    try {
        return await fetch(`http://ip-api.com/json/${ip}`)
            .then(res => res.json())
            .then(res => {
                return countryLang.getCountry(res.countryCode, function (err, country) {
                    if (err) {
                        console.log('Error in ipInfo middleware', err);
                        return {status: 'error', error: err};
                    } else {
                        res.language = country.languages.map(lang => lang['iso639_1']);
                        res.timezone = countryTimezone.getTimezonesForCountry(res['countryCode'])[0];
                        if (callback) {
                            callback(res);
                        }
                        console.log(res)
                        return res;
                    }
                });
            });
    }
    catch (e) {
        console.log('Error in ipInfo middleware', e);
        return {status: 'error', error: e};
    }
};
