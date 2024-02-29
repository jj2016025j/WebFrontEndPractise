const ThermalPrinter = require("node-thermal-printer").printer;
const PrinterTypes = require("node-thermal-printer").types;

console.log("start");
let printer = new ThermalPrinter({
    type: PrinterTypes.GENERIC,  // 打印机类型
    // EPSON
    // STAR
    // BIXOLON
    // CITIZEN
    // CUSTOM
    // SEWOO
    // GENERIC
    interface: 'printer:Microsoft Print To PDF',  // 打印机名称，确保替换为实际的打印机名称
    // AnyDesk v4 Printer Driver
    // AnyDesk Printer
    // Microsoft Print To PDF
    // OneNote (Desktop)
    // Send to Microsoft OneNote 16 Driver
    // driver: require('printer')  // 使用 'printer' 驱动，需要安装 'printer' 模块
});
// const printer = new ThermalPrinter({
//     type: PrinterTypes.EPSON,  // 选择打印机类型
//     interface: 'tcp://192.168.1.100',  // 对于网络打印机，使用打印机的 IP 地址
//   });
console.log("set");


(async function () {
    const isConnected = await printer.isPrinterConnected();  // 检查打印机连接状态
    console.log("Printer connected:", isConnected);

    printer.println("Hello, World!");  // 添加打印内容
    try {
        const execute = await printer.execute();  // 执行打印任务
        console.log("Print success.");
    } catch (error) {
        console.error("Print failed:", error);
    }
})();