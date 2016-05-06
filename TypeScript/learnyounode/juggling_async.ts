/// <reference path="typings/main.d.ts" />
import http   = require( 'http' );

class Synchronizer{
    private collected : Array<String> = [];
    private numCompleted : number = 0;
    private numRequests  : number;
    private callback;
    
    constructor( NumOfRequests : number, callback ){
        // here I would like to throw an exception!        
        if(NumOfRequests < 0 ) { console.log("invalid num of requests"); return; }        
        this.numRequests = NumOfRequests;
        this.callback    = callback;
    }
    
    private requestIdIsvalid( requestId : number ) : boolean{
        return (requestId >= 0 && requestId < this.numRequests);
    }       
    
    public setResponse( requestId : number, data : string ){        
        if( !this.requestIdIsvalid(requestId)){
            console.log("invalid request Id"); 
            return;
        }
        this.collected[requestId] = data;
        ++this.numCompleted;
        if(this.numCompleted === this.numRequests ){
            return this.callback(this.collected);
        }
    }
}

class Startup {        
    public static main( ) :number{
        var synchro : Synchronizer = new Synchronizer(3,
            (dataArray : Array<String>) =>{
                for(var i = 0; i < dataArray.length; ++i ){
                    console.log( dataArray[i]);
                }
            }
        );
        var setupRequest = function( reqId :number, url : string){
            http.get( url, function( response ){
                var allData : string = '';
                response.setEncoding( 'utf8' );
                response.on( 'end',  (data) => synchro.setResponse(reqId,allData));
                response.on( 'data', (data) => allData += data );
                response.on( 'error', console.error );            
            });
        }        
        
        for( var i = 0; i < 3; ++i ){
            setupRequest( i, process.argv[i+2] );
        }        
                
        return 0;        
    }
}
Startup.main( );

//BOTTOMLINE
// A lot more code than with javascript, but it seems far more structured
// it is a pro or a con? :)