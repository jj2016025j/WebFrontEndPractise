const ThermalPrinter = require("node-thermal-printer").printer;
const PrinterTypes = require("node-thermal-printer").types;

let printer = new ThermalPrinter({
    type: PrinterTypes.TANCA,  // 打印机类型
    // EPSON
    // STAR
    // BIXOLON
    // CITIZEN
    // CUSTOM
    // SEWOO
    // GENERIC
    interface: 'USB001',  // 本來只有USB001可以不知道為甚麼後面其他也可以了，USB004以上不行
    // driver: require('printer')  // 使用 'printer' 驱动，需要安装 'printer' 模块
});
console.log("set",printer.ThermalPrinter);

(async function () {
    const isConnected = await printer.isPrinterConnected();
    console.log("Printer connected:", isConnected);

    if (isConnected) {
        // 打印文本
        printer.println("Hello, World!");

        // 打印加粗文本
        printer.bold(true);
        printer.println("Bold text");
        printer.bold(false);

        // 打印二维码
        // printer.qrCode("https://www.example.com");

        // 尝试其他打印命令...

        // 切割纸张
        printer.cut();

        try {
            const execute = await printer.execute();
            console.log("Print success.", execute);
        } catch (error) {
            console.error("Print failed:", error);
        }
    } else {
        console.log("Printer not connected");
    }
})();