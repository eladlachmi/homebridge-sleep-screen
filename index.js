"use strict"

const exec = require('child_process').exec

let Service, Characteristic

module.exports = function (homebridge) {
    Service = homebridge.hap.Service;
    Characteristic = homebridge.hap.Characteristic;
    homebridge.registerAccessory("homebridge-screen-standby", "ComputerScreen", ComputerScreen);
}

function ComputerScreen(log, config, api) {
    this.log = log;
    this.currentStatus = true
    this.name = config["name"]

    this.screenService = new Service.Switch(this.name);

    this.screenService
        .getCharacteristic(Characteristic.On)
        .on('get', this.getSwitchOnCharacteristic.bind(this))
        .on('set', this.setSwitchOnCharacteristic.bind(this));
}

ComputerScreen.prototype.getServices = function getServices() {
    return [this.screenService]
}




ComputerScreen.prototype.getSwitchOnCharacteristic = function(next) {
        const me = this
        me.log(`Returned current state: ${me.currentStatus}`);
        return next(null, me.currentStatus)
}


ComputerScreen.prototype.setSwitchOnCharacteristic = function (on, next) {
        const me = this
        me.log(`Set status to ${on}`)
        me.currentStatus = !me.currentStatus
        if (!me.currentStatus) {
            exec("pmset displaysleepnow")
        } else {
            exec("caffeinate -u -t 5")
        }
        return next()
}