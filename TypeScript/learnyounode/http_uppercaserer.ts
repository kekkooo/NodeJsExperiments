/// <reference path="typings/main.d.ts" />
import http      = require( 'http' );
import through2  = require( 'through2' );

class Startup {        
    public static main( ) :number{
        var port = process.argv[2];
        var server = http.createServer(
            (req, resp )=>{
                req.pipe( through2(
                    // this API just sucks. this way of returning data 
                    // is completely unintuitive.
                    (chunk, enc, callback) =>{                        
                        callback( null, chunk.toString().toUpperCase());                        
                        
                    })).pipe(resp);                                
            }
        )
        server.listen(port);                
        return 0;        
    }
}
Startup.main( );
