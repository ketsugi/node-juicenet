## Members

<dl>
<dt><a href="#startChargingAsync">startChargingAsync</a></dt>
<dd><p>Start charging now</p>
</dd>
<dt><a href="#stopChargingAsync">stopChargingAsync</a></dt>
<dd><p>Stop charging now</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#getDevices">getDevices(apiToken, callback)</a> ⇒ <code>object</code></dt>
<dd><p>Fetch list of JuiceNet chargers for a given account</p>
</dd>
<dt><a href="#getDevicesAsync">getDevicesAsync(apiToken)</a> ⇒ <code>Promise</code></dt>
<dd><p>Fetch list of JuiceNet chargers for a given account</p>
</dd>
<dt><a href="#getDeviceState">getDeviceState(apiToken, chargerToken, callback)</a> ⇒ <code>object</code></dt>
<dd><p>Fetch the state of a charger</p>
</dd>
<dt><a href="#getDeviceStateAsync">getDeviceStateAsync(apiToken, chargerToken)</a> ⇒ <code>Promise</code></dt>
<dd><p>Fetch the state of a charger</p>
</dd>
<dt><a href="#setOverride">setOverride(apiToken, chargerToken, startTime, stopTime, callback)</a> ⇒ <code>object</code></dt>
<dd><p>Set the charger override</p>
</dd>
<dt><a href="#startCharging">startCharging(apiToken, chargerToken, callback)</a></dt>
<dd><p>Start charging now</p>
</dd>
<dt><a href="#stopCharging">stopCharging(apiToken, chargerToken, callback)</a></dt>
<dd><p>Stop charging now</p>
</dd>
</dl>

<a name="startChargingAsync"></a>

## startChargingAsync
Start charging now

**Kind**: global variable  

| Param | Type | Description |
| --- | --- | --- |
| apiToken | <code>string</code> | JuiceNet API token |
| chargerToken | <code>string</code> | JuiceNet charger token |
| energyToAdd | <code>number</code> | Energy to charge the vehicle by |

<a name="stopChargingAsync"></a>

## stopChargingAsync
Stop charging now

**Kind**: global variable  

| Param | Type | Description |
| --- | --- | --- |
| apiToken | <code>string</code> | JuiceNet API token |
| chargerToken | <code>string</code> | JuiceNet charger token |

<a name="getDevices"></a>

## getDevices(apiToken, callback) ⇒ <code>object</code>
Fetch list of JuiceNet chargers for a given account

**Kind**: global function  
**Returns**: <code>object</code> - {response, devices}  

| Param | Type | Description |
| --- | --- | --- |
| apiToken | <code>string</code> | JuiceNet API token |
| callback | <code>nodeBack</code> | Node-style callback |

<a name="getDevicesAsync"></a>

## getDevicesAsync(apiToken) ⇒ <code>Promise</code>
Fetch list of JuiceNet chargers for a given account

**Kind**: global function  
**Returns**: <code>Promise</code> - {response, devices}  

| Param | Type | Description |
| --- | --- | --- |
| apiToken | <code>string</code> | JuiceNet API token |

<a name="getDeviceState"></a>

## getDeviceState(apiToken, chargerToken, callback) ⇒ <code>object</code>
Fetch the state of a charger

**Kind**: global function  
**Returns**: <code>object</code> - {response, body, chargerState}  

| Param | Type | Description |
| --- | --- | --- |
| apiToken | <code>string</code> | JuiceNet API token |
| chargerToken | <code>string</code> | JuiceNet charger token |
| callback | <code>nodeBack</code> | Node-style callback |

<a name="getDeviceStateAsync"></a>

## getDeviceStateAsync(apiToken, chargerToken) ⇒ <code>Promise</code>
Fetch the state of a charger

**Kind**: global function  
**Returns**: <code>Promise</code> - {response, body, chargerState}  

| Param | Type | Description |
| --- | --- | --- |
| apiToken | <code>string</code> | JuiceNet API token |
| chargerToken | <code>string</code> | JuiceNet charger token |

<a name="setOverride"></a>

## setOverride(apiToken, chargerToken, startTime, stopTime, callback) ⇒ <code>object</code>
Set the charger override

**Kind**: global function  
**Returns**: <code>object</code> - {response, success}  

| Param | Type | Description |
| --- | --- | --- |
| apiToken | <code>string</code> | JuiceNet API token |
| chargerToken | <code>string</code> | JuiceNet charger token |
| startTime | <code>string</code> | Timestamp to start charging |
| stopTime | <code>string</code> | Timestamp to stop charging |
| callback | <code>nodeBack</code> | Node-style callback |

<a name="startCharging"></a>

## startCharging(apiToken, chargerToken, callback)
Start charging now

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| apiToken | <code>string</code> | JuiceNet API token |
| chargerToken | <code>string</code> | JuiceNet charger token |
| callback | <code>nodeBack</code> | Node-style callback |

<a name="stopCharging"></a>

## stopCharging(apiToken, chargerToken, callback)
Stop charging now

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| apiToken | <code>string</code> | JuiceNet API token |
| chargerToken | <code>string</code> | JuiceNet charger token |
| callback | <code>nodeBack</code> | Node-style callback |

