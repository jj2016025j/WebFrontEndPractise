const http = require('http');

function getNetIPAddress() {
    return new Promise((resolve, reject) => {
        http.get('http://ipinfo.io/ip', (resp) => {
            let data = '';

            // 接收數據片段。
            resp.on('data', (chunk) => {
                data += chunk;
            });

            // 數據接收完畢。
            resp.on('end', () => {
                resolve(data.trim());
            });

        }).on("error", (err) => {
            reject(err);
        });
    });
}
const os = require('os');

function getLocalIPAddress() {
    const networkInterfaces = os.networkInterfaces();
    for (const interfaceName in networkInterfaces) {
        const networkInterface = networkInterfaces[interfaceName];
        for (const networkAddress of networkInterface) {
            if (networkAddress.family === 'IPv4' && !networkAddress.internal) {
                return networkAddress.address;
            }
        }
    }
    return null;
}

// 導出函數
module.exports = { getLocalIPAddress, getNetIPAddress };
