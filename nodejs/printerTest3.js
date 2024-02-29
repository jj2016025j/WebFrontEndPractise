const ThermalPrinter = require("node-thermal-printer").printer;
const PrinterTypes = require("node-thermal-printer").types;
const electron = typeof process !== 'undefined' && process.versions && !!process.versions.electron;

let printer = new ThermalPrinter({
  type: PrinterTypes.EPSON,
  interface: 'printer:My Printer',
  driver: require(electron ? 'electron-printer' : 'printer')
});