
var http    = require( 'http' );
var url     = process.argv[2];

function handleHttpDataEvent(data){
    console.log(data);
}

function handleHttpErrorEvent(data){
    console.error( "An error occurred during requesting url :" + url);
    console.error( "here the details : \n" + data);
    
}

function handleHttpEndEvent(data){
    // learnyounode verify fails if I print something here
    //console.log("End of broadcast");
}

function handleHttpResponse(response){
    response.setEncoding( 'utf8' );
    response.on( 'data',  handleHttpDataEvent );
    response.on( 'error', handleHttpErrorEvent );
    response.on( 'end',   handleHttpEndEvent );
}

http.get(url, handleHttpResponse);

// proposed solution was:

/*
var http = require('http');

http.get( process.argv[2], function(response){
    response.setEncoding('utf8');
    response.on('data', console.log);       // clever
    response.on('error', console.error);    // should remember that
    });
*/
// bottomline, 
// my solution was more explicit but less in line with node.js philosophy 
