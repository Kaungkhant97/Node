/**
 * Created by kaungkhantthu on 8/7/16.
 */
var http = require('http');
var bufferList = require('bl');
var number = 2;
function call(number) {
    http.get(process.argv[number], (res) => {

        res.pipe(bufferList((err, data)=> {
            if (err) return console.log(err);
            
            console.log(data.toString());
            if(number < 4 ){
                number++;
                call(number);
            }
        }));
        
      
    }).on('error', (e) => {
        console.error(e);
    });
};
call(number);

