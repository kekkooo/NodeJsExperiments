var http = require('http');
var bl   = require('bl');

function Synchronizer(numRequests){
    this.collectedData  = [];
    this.numRequests    = numRequests;
    this.endedRequests  = 0;
}

Synchronizer.prototype.setResponse = function(requestId, data){
    if( !this.checkRequestId(requestId) ) { 
        return; 
    }
    this.collectedData[requestId] = data;
    this.endedRequests +=1;        
    if( this.endedRequests == this.numRequests ){
        this.printOrderedData();
    }
}

Synchronizer.prototype.printOrderedData = function(){
    for( var i = 0; i < this.numRequests; ++i ){
        console.log( this.collectedData[i] );            
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
/*
class Synchronizer{
    constructor( numRequests ){
        if( isNaN(numRequests)){ 
            console.error("Num Requests not a number");
            return; 
        }
        this.collectedData  = [];
        this.numRequests   = numRequests;
        this.endedRequests = 0;                     
    }       
    
    printOrderedData(){        
        for( var i = 0; i < this.numRequests; ++i ){
            console.log( this.collectedData[i] );            
        }
    }
    
    setResponse( requestId, data ){
        if( !this.checkRequestId(requestId) ) { 
            return; 
        }
        this.collectedData[requestId] = data;
        this.endedRequests +=1;        
        if( this.endedRequests == this.numRequests ){
            this.printOrderedData();
        }        
     }
     
     getData(requestId){
        if( !this.checkRequestId(requestId) ) { 
            return; 
        }
         return this.collectedData[requestId];
     }
     
     checkRequestId(requestId){
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
}
*/
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

var synchro = new Synchronizer(3);

for( var i = 0; i < 3; ++i ){
    setupRequest(process.argv[i+2], i);
}

// BOTTOMLINE
// This solution is the same as the juggling_async but works without strict js.
