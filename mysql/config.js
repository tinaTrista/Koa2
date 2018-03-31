// 读取配置的时候，我们用config.js实现不同环境读取不同的配置文件
//具体的规则是:
//先读取config-default.js；
//如果不是测试环境，就读取config-override.js，如果文件不存在，就忽略。
//如果是测试环境，就读取config-test.js。


// 配置文件入口
const defaultConfig = './config/config-default.js';
// 可设定为绝对路径，如 /opt/product/config-override.js
const overrideConfig = './config/config-override.js';
const testConfig = './config/config-test.js';

const fs = require('fs');

var config = null;

if (process.env.NODE_ENV === 'test') {
    console.log(`Load ${testConfig}...`);
    config = require(testConfig);
} else {
    console.log(`Load ${defaultConfig}...`);
    config = require(defaultConfig);
    try {
        if (fs.statSync(overrideConfig).isFile()) {
            console.log(`Load ${overrideConfig}...`);
            config = Object.assign(config, require(overrideConfig));
        }
    } catch (err) {
        console.log(`Cannot load ${overrideConfig}.`);
    }
}

module.exports = config;
