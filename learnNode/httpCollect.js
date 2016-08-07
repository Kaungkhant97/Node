/**
 * Created by kaungkhantthu on 8/7/16.
 */
var http = require('http');
var bufferList = require('bl');


http.get(process.argv[2], (res) => {

   res.pipe(bufferList((err,data)=>{
       if(err) return console.log(err);

       console.log(data.length);
       console.log(data.toString());
   }));

}).on('error', (e) => {
    console.error(e);
});