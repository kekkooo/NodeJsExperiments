"use strict";
var http = require('http');
var bl   = require('bl');

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

function setupRequest( url, reqId){
    http.get( url, function(response){    
        // essentially bl accumulates data and allows you to define
        // a single callback that will be executed at the end of the response
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
// The official solution used just global variables and one funciton
// I encapsulated the result handling inside a class
// I prefer this approch but probably is not the best way javascript is intended to be used,
// probably less code is better.  
// I also added some error handling.