/// <reference path="typings/main.d.ts" />
import http = require( 'http' );
import url  = require( 'url' );

class Startup {
    
    private static handleIso( iso : string ) : string{
        var theDate = new Date( iso );
        var obj = {
            'hour' : theDate.getHours(),
            'minute' : theDate.getMinutes(),
            'second' : theDate.getSeconds()
        }
        return JSON.stringify(obj);
    } 
    
    private static handleUnix( iso : string ) : string{
        var theDate = new Date( iso );
        var obj = { 'unixtime' : theDate.getTime() }
        return JSON.stringify( obj );
    }
    
    private static handleBadRequests( resp : http.ServerResponse,
                                      msg : string ){
        console.error( msg );
        resp.statusCode = 400;
        resp.end( msg );
    }
    
    private static dispatchRequest( req : http.IncomingMessage,
                                    resp : http.ServerResponse ){
        
        var reqInfo = url.parse( req.url, true);
        if( req.method !== 'GET' ){
            Startup.handleBadRequests( resp, 'Send me a GET request ');                        
        }else{            
            switch (reqInfo.pathname) {
                case '/api/parsetime':{
                    resp.end( Startup.handleIso( reqInfo.query.iso ));
                    break;
                }
                case '/api/unixtime' :{
                    resp.end( Startup.handleUnix( reqInfo.query.iso ));
                    break;
                }
            
                default:
                    Startup.handleBadRequests( resp, 'Unknown endpoint : ' + reqInfo.pathname );
                    break;
            } 
            
        console.log(reqInfo.path);
        console.log(reqInfo.query);
        }
       
    }
    
    public static main( ) :number{
        var port = process.argv[2];
        var server = http.createServer(
            (req, resp )=> Startup.dispatchRequest( req, resp )
        );
        server.listen(port);                
        return 0;        
    }
}
Startup.main( );
