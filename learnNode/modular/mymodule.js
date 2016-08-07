var fs = require('fs');
var path = require('path');
//var ext = "."+process.argv[3];

module.exports= function(filepath,ext,callback){
    fs.readdir(filepath,function(err,list){
            var finalist = [];
        ext = "."+ext
        if(err) {
            return callback(err,null);
        }else{

            for (var a in list) {
                if (path.extname(list[a]) == ext) {
                    finalist.push(list[a]);
                }

            }
            callback(null,finalist);

        }
        
        

    });
}