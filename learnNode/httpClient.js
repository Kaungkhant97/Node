/**
 * Created by kaungkhantthu on 8/7/16.
 */

var http = require('http');


http.get(process.argv[2], (res) => {
    res.on('data', (d) => {
        console.log(d.toString());
    });
}).on('error', (e) => {
    console.error(e);
});


