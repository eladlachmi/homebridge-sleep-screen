const exec = require('child_process').exec

module.exports = {
    mac: {
        turnOn: function() {
            exec("caffeinate -u -t 5")
        },
        turnOff: function() {
            exec("pmset displaysleepnow")
        }
    },
    windows: {
        turnOn: function() {

        },
        turnOff: function() {
            exec("powershell (Add-Type '[DllImport(\"user32.dll\")]^public static extern int SendMessage(int hWnd, int hMsg, int wParam, int lParam);' -Name a -Pas)::SendMessage(-1,0x0112,0xF170,2")
        }
    }
}