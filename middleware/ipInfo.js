const fetch = require("node-fetch");

module.exports = async function getIpInfo(ip) {
    try {
        return await fetch(`http://ip-api.com/json/${ip}`).then(res => res.json());
    }
    catch (e) {
        console.log('Error in ipInfo middleware', e);
        return {status: 'error', error: e};
    }
};
