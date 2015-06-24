var assert = require('assert');
var mocha = require('mocha');
var auth = require('./index');

describe('Auth', function () {

    var token;

    before(function () {
        //Set artificial current date
        Date = { now: function () { return 1434391140000; } };

        //Render token
        token = auth('G94J1DT4WTW54AUD', 'ac49d7f400a417a5d4173b0a7085b55a', 'GET', 'https://fitbay.com/api/v1.17.0/bootstrap');
    });

    it('matches', function () {
        //Assert token matches expected output
        assert.strictEqual(token, 'FWS G94J1DT4WTW54AUD:YjBiMjJmNjUyNDZiZjFiOGVhMDNhMzczNTA2MGY1MTI3ZjRhYzZlMQ==:1434391140');
    });

});