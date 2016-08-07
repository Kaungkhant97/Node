//console.log(process.argv);
var inputs = [];
inputs = process.argv.slice(2,process.argv.length);
var total = 0;
for(var i in inputs){
    total += parseInt(inputs[i]);
}
console.log(total);