var fs = require("fs");

function readFile(whenFileReadFinish){
fs.readFile(process.argv[2], function(err, data){
var mstr = data.toString().split('\n');
  whenFileReadFinish(mstr.length-1);
});
};

function print(output){
  console.log(output);
}
readFile(print);