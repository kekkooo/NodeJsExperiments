/// <reference path="typings/main.d.ts" />
import http      = require( 'http' );
import fs       = require( 'fs' );

class Startup {        
    public static main( ) :number{
        var port = process.argv[2];
        var path = process.argv[3];
        var server = http.createServer(
            (req, resp )=>{
                fs.createReadStream(path).pipe(resp);                
            }
        )
        server.listen(port);                
        return 0;        
    }
}
Startup.main( );
