var fs = require('fs');
var path = require('path');


fs.readdir(process.argv[2],function(err,list){
    var ext ="."+process.argv[3];
    for(var a in list){
        
        if(path.extname(list[a]) == ext ){
            console.log(list[a]);
        }
    
    }

});


