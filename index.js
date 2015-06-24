var crypto = require('crypto');

module.exports = function(apiKey, apiSecret, method, url) {
    var signature = false;
    var endpoints = url.match(/\/([v|V]\d+(.*)?|latest)\/[^?]*/);
    var endpoint = endpoints instanceof Array ? endpoints.shift().replace(/\/$/, "") : false;

    if (apiKey && endpoint) {
        var timestamp = Math.round(Date.now() / 1000);
        var hash = crypto.createHmac('sha1', apiSecret).update(method + endpoint + timestamp).digest('hex');

        var hashBuffer = new Buffer(hash);
        var encoded = hashBuffer.toString('base64');

        signature = 'FWS ' + apiKey + ':' + encoded + ':' + timestamp;
    }

    return signature;
};