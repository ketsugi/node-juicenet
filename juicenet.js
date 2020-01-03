"use strict";

const apiBaseUrl = "https://jbv1-api.emotorwerks.com";
const apiMethod = "/box_pin";
const secureApiMethod = "/box_api_secure";
const uuid = require('uuid/v4')();

const log = require('loglevel');
const request = require('request').defaults({
    json: true,
    gzip: true
});
const Promise = require('promise');

/**
 * Fetch list of JuiceNet chargers for a given account
 * @param {string} apiToken - JuiceNet API token
 * @param {nodeBack} callback - Node-style callback
 * @returns {object} {response, devices}
 */
exports.getDevices = (apiToken, callback) => {
    log.info("juicenet.getDevices()");
    
    callback = callback || function (err, result) { /* do nothing! */ }

    if (!apiToken) {
        let msg = "getDevices(): No API token provided";
        log.error(msg);
        callback(msg, null);
        return;
    } 

    let req = {
        method: 'POST',
        url: apiBaseUrl + apiMethod,
        body: {
            "cmd": "get_account_units",
            "device_id": uuid,
            "account_token": apiToken
        }
    };

    log.debug(`Request: ${JSON.stringify(req)}`);

    request(req, (error, response, body) => {
        log.debug(`Response: ${JSON.stringify(response)}`);
        log.debug(`Body: ${JSON.stringify(body)}`);

        callback(error, { 
            error: error,
            response: response,
            devices: body.units
        });

        log.info("Successfully retrieved account devices");
    });
};

/**
 * Fetch list of JuiceNet chargers for a given account
 * @function getDevicesAsync
 * @param {string} apiToken - JuiceNet API token
 * @returns {Promise} {response, devices}
 */
exports.getDevicesAsync = Promise.denodeify(exports.getDevices);

/**
 * Fetch the state of a charger
 * @param {string} apiToken - JuiceNet API token
 * @param {string} chargerToken - JuiceNet charger token
 * @param {nodeBack} callback - Node-style callback
 * @returns {object} {response, body, chargerState}
 */
exports.getDeviceState = (apiToken, chargerToken, callback) => {
    log.info("juicenet.getDeviceState()");

    callback = callback || function (err, result) { /* do nothing! */ }

    if (!apiToken || !chargerToken) {
        let msg = "getDeviceState(): No API or charger token provided";
        log.error(msg);
        callback(msg, null);
        return;
    } 

    let req = {
        method: 'POST',
        url: apiBaseUrl + secureApiMethod,
        body: {
            "cmd": "get_state",
            "device_id": uuid,
            "account_token": apiToken,
            "token": chargerToken
        }
    };

    log.debug(`Request: ${JSON.stringify(req)}`);

    request(req, (error, response, body) => {
        log.debug(`Response: ${JSON.stringify(response)}`);
        log.debug(`Body: ${JSON.stringify(body)}`);

        callback(error, { 
            error: error,
            response: response,
            chargerState: body
        });

        log.info("Successfully retrieved device state");
    });
};

/**
 * Fetch the state of a charger
 * @function getDeviceStateAsync
 * @param {string} apiToken - JuiceNet API token
 * @param {string} chargerToken - JuiceNet charger token
 * @returns {Promise} {response, body, chargerState}
 */
exports.getDeviceStateAsync = Promise.denodeify(exports.getDeviceState);

