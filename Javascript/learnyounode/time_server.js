var net         = require( 'net' );
var strftime    = require('strftime'); 
var port = process.argv[2];

function getFormattedDate(){
    //"YYYY-MM-DD hh:mm"
    return strftime('%Y-%m-%d %H:%M', new Date());    
}

var server = net.createServer( function(socket){
    var date = getFormattedDate();
    socket.write( date + '\n' );    
    socket.end();
});
server.listen(port);

// BOTTOMLINE
// strftime makes everything easier