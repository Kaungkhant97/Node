var fs = require('fs');
var buffer =fs.readFileSync(process.argv[2]);
var mstr = buffer.toString().split('\n');
console.log(mstr.length-1);