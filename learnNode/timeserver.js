/**
 * Created by kaungkhantthu on 8/7/16.
 */
var net = require("net");
var port = process.argv[2];
var date = new Date();
    

var server = net.createServer(function (socket) {
    var month= date.getMonth()+1;
    var data = date.getFullYear()+"-0"+month+"-0"+date.getDate()+" "+"0"+date.getHours()+":"+"0"+date.getMinutes()+"\n";
   socket.write(data);
    socket.end();
   server.close();

});
server.listen(port,()=>{
  
});