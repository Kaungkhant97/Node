/**
 * Created by kaungkhantthu on 8/7/16.
 */

var mymodule = require('./mymodule');
var path = require('path');
var ext = process.argv[3];


mymodule(process.argv[2],ext,function(err,list) {
        if(err) {
            return console.log(err);
        }else {
            for (var a in list) {
               // if (path.extname(list[a]) == ext) {
                    console.log(list[a]);
                //}

            }
        }

});
