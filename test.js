"use strict";

const assert = require("assert");
const juicenet = require("./juicenet.js");

describe("JuiceNet API test", () => {
    let apiToken = "";
    let device = {};

    before(async () => {
        apiToken = require("./config.json").apiToken;
        if (!apiToken) {
            assert.fail("Please specify your JuiceNet API token in config.json");
        }

        let devices = (await juicenet.getDevicesAsync(apiToken)).devices;
        if (devices.length <= 0) {
            assert.fail("At least one charger should be registered to this account to proceed.");
        }

        device = devices[0];
    });

    it("should be able to retrieve charger state", async () => {
        let state = (await juicenet.getDeviceStateAsync(apiToken, device.token)).chargerState;
        assert.ok(state.success, "Unable to fetch charger state.");
        assert.strictEqual(state.ID, device.unit_id, "Mismatch between device IDs.");
    });

    it("should be able to start charging", async () => {
        let startSuccess = (await juicenet.startChargingAsync(apiToken, device.token));
        assert.ok(startSuccess, "Failed to start charging.");
    });

    it("should be able to stop charging", async () => {
        let stopSuccess = (await juicenet.stopChargingAsync(apiToken, device.token)).success;
        assert.ok(stopSuccess, "Failed to stop charging.");
    });
});


// (async () => {

//     // let state = (await juicenet.getDeviceStateAsync(apiToken, chargerToken)).chargerState;
//     // log.info(state);

//     let startCharging = (await juicenet.startChargingAsync(apiToken, chargerToken)).success;
//     log.info(startCharging);

//     // let stopCharging = (await juicenet.stopChargingAsync(apiToken, chargerToken)).success;
//     // log.info(stopCharging);
// })();
