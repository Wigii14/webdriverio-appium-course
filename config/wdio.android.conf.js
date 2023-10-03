const {config} = require('./wdio.shared.conf');
//const path = require('path');

config.port = 4723;

config.specs = [
    'D:/Automation/webdriverio-appium-v8/test/specs/android/addnotescreen.spec.js',
];

config.capabilities = [
    {
    'appium:platformName': 'Android',
    'appium:platformVersion': '13',
    'appium:deviceName': 'Pixel 7 Pro',
    'appium:automationName': 'UIAutomator2',
    'appium:app': 'D:/Automation/webdriverio-appium-v8/app/Android/ColorNote+Notepad.apk',
    'appium:autoGrantPermissions': true
    }
]

    //
    // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.
config.services = ['appium'],

exports.config = config;