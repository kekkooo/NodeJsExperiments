var http = require('http');
var bl   = require('bl');

function Synchronizer(numRequests, callback ){
    this.collectedData  = [];
    this.numRequests    = numRequests;
    this.endedRequests  = 0;
    this.callback       = callback;
}

Synchronizer.prototype.setResponse = function(requestId, data){
    if( !this.checkRequestId(requestId) ) { 
        return; 
    }
    this.collectedData[requestId] = data;
    this.endedRequests +=1;        
    if( this.endedRequests == this.numRequests ){
        return this.callback(this.collectedData);
    }
}

Synchronizer.prototype.checkRequestId = function(requestId){
    if( isNaN(requestId)){ 
        console.error("Num Requests not a number"); 
        return false; 
    }
    if( requestId < 0 || requestId > this.numRequests ){
        console.error("requestId is out of bounds");
        return false;
    }
    return true;
}

function setupRequest( url, reqId ){
    http.get( url, function(response){            
        response.pipe( bl( function(err, data){
            if(err){ 
                console.error(err); 
            }
            data = data.toString();            
            synchro.setResponse( reqId, data);
        }
        ));
    })
}

var synchro = new Synchronizer(3, function(data){
    var size = data.length;    
    for( var i = 0; i < size; ++i ){
        console.log(data[i]);
    }
});

for( var i = 0; i < 3; ++i ){
    setupRequest(process.argv[i+2], i);
}
// BOTTOMLINE
// This is more in the javascript way, instead of delegating the class to print data
// handling data is delegated to a callback that is passed to the constructor.
