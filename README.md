# homebridge-sleep-screen

[![npm version](https://badge.fury.io/js/homebridge-standby-screen.svg)](https://badge.fury.io/js/homebridge-standby-screen)
[![Known Vulnerabilities](https://snyk.io/test/github/elad-lachmi/homebridge-sleep-screen/badge.svg?targetFile=package.json)](https://snyk.io/test/github/elad-lachmi/homebridge-sleep-screen?targetFile=package.json)
[![dependencies](https://david-dm.org/elad-lachmi/homebridge-sleep-screen.svg)]()

## OS Support

### MacOS

Currenlty, only MacOS is supported, as I just got started with this plugin.

In MacOS I use the `pmset` command to put the screen to sleep and `caffinate` to wake it up.
Both are suported on MacOS > 10.9

### Windows 10

I will try and implement Windows 10 support next.

## Configuration

```json
    {
        "accessory": "ComputerScreen",
        "name": "Mac Screen",
        "osType": "mac"
    }

```

`osType` can be mac, which uses pmset and caffinate or windows, which uses a `powershell` command run from `cmd`. Default is mac.

## Work in progress

This is still at the very early stages.
Use at your own risk.

**Note: Currently this assumes you are running homebridge on the computer, which you want to control the screen of. I will try and make this more distributed later.**

If you would like to contribute, feel free to send a PR my way.

Enjoy!
