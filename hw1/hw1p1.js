#!/usr/bin/env node
var fs = require('fs');
var output_file = "fortune.txt";
var output = "A startup is a business built to grow rapidly.\n";
fs.writeFileSync(output_file, output);
console.log("Script: " + __filename + "\nWrote: " + output + "To: " + output_file);
