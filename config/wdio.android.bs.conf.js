require('dotenv').config()
const {config} = require('./wdio.shared.conf');
//const path = require('path');

config.user = process.env.BROWSERSTACK_USER;
config.key = process.env.BROWSERSTACK_KEY;
config.hostname = "hub.browserstack.com"
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
    'appium:app': 'bs://0b267e0c3b3320c07503f137b03560247e0ddc12',
    'appium:autoGrantPermissions': true
    }
]


    //
    // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.
config.services = ['browserstack'],


exports.config = config;