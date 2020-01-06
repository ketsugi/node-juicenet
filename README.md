# node-juicenet
[![Version](http://img.shields.io/npm/v/juicenet.png)](https://www.npmjs.org/package/node-juicenet)
[![License](https://img.shields.io/npm/l/juicenet.svg)](https://github.com/ketsugi/node-juicenet/blob/master/LICENSE)
[![Downloads](https://img.shields.io/npm/dt/juicenet.svg)](https://www.npmjs.org/package/node-juicenet)

## An unofficial Node client for enel-X's JuiceNet API

### Instructions

In order to use this client, you will need your JuiceNet API token.

1. Login to the [JuiceNet portal](https://home.juice.net/).
1. Navigate to your [User Profile](https://home.juice.net/Manage).
1. You should find your JuiceNet API token there.

With the API token in hand, you can now call the `getDevices` (or `getDevicesAsync`) function to fetch a list of EVSE devices registered to your JuiceNet account. For each device on the account, the response will include another token that is specific to that charger. These two tokens (API and charger) will be needed for all other function calls.