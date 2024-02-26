// console.log(printer);
const printer = require('printer');

function listAvailablePrinters() {
    const printers = printer.getPrinters();
    console.log('可用的列印機列表:');
    printers.forEach((pr, index) => {
        console.log(`${index + 1}: ${pr.name}`);
    });
}

listAvailablePrinters();
// const PDFDocument = require('pdfkit');
// const fs = require('fs');
// const printer = require('printer');

// // 创建 PDF 文档
// const doc = new PDFDocument();
// const invoicePath = 'path/to/invoice.pdf';
// doc.pipe(fs.createWriteStream(invoicePath));
// // 添加文档内容，例如：
// doc.fontSize(25).text('电子发票标题', 100, 100);
// // 添加更多内容...
// doc.end();

// // 打印文档
// function printDocument(filePath) {
//   // 替换为你的打印机名称
//   const printerName = 'YOUR_PRINTER_NAME';

//   // 检查打印机是否存在
//   if (printer.getPrinters().some(p => p.name === printerName)) {
//     printer.printFile({
//       filename: filePath,
//       printer: printerName, // 可选，如果不设置则使用默认打印机
//       success: function(jobID) {
//         console.log('打印任务已发送，任务ID:', jobID);
//       },
//       error: function(err) {
//         console.error('打印失败:', err);
//       }
//     });
//   } else {
//     console.error('找不到指定的打印机:', printerName);
//   }
// }

// // 打印电子发票
// printDocument(invoicePath);


// var jobFrom =
//     "collate": true;
// 其中，"landscape" 表示横向打印，"collate" 表示是否按页码顺序排序，"copies" 表示复制次数。


// var fileToPrint = "path/to/file.pdf";
// printer.printDirect({
//   data: fileToPrint,
//   type: "PDF",
//   printer: printerName,
//   success:function(jobID){
//    console.log("Printed with ID: "+jobID);
//   },
//   error:function(err){
// console.error(err);
//   }
// }, jobFrom);

// var escpos = require('escpos');
//    console.log(escpos);

// escpos.USB = require('escpos-usb');
// var device  = new escpos.USB();
// console.log(device);

// var printer = new escpos.Printer(device);
// printer.text('Hello world!');
// printer.cut();
// device.close();
// device.open(function(){}
// );