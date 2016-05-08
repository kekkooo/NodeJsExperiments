/// <reference path="typings/main.d.ts" />
import net      = require( 'net' );
//import strftime = require( 'strftime' );

function getFormattedDate(){
    //"YYYY-MM-DD hh:mm"
    var now = new Date();
    var actualM     = now.getMonth() + 1;
    var paddedM     = ( actualM < 10 ? '0' + ( actualM ) : actualM );
    var paddedD     = now.getDate() < 10 ? '0' + now.getDate() : now.getMonth();
    var paddedMin   =  now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes();
    var paddedHours =  now.getHours() < 10 ? '0' + now.getHours() : now.getHours();
  // I didn't found the typings definitions for strftime
  return ( now.getFullYear() + '-' + paddedM + '-' + paddedD + ' ' +
           paddedHours + ':' + paddedMin);         
}

class Startup {        
    public static main( ) :number{
        var port   = process.argv[2];
        var server = net.createServer( (socket) => {
            socket.end( getFormattedDate() + '\n'); 
        });
        server.listen( port );                
        return 0;        
    }
}
Startup.main( );
