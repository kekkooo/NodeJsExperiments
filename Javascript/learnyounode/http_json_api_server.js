var http = require('http');
var url  = require('url');

function parseTime(time){
    var dateObj = new Date( time );
    var timeObj = {
        hour   : dateObj.getHours(),
        minute : dateObj.getMinutes(),
        second : dateObj.getSeconds(),
    };    
    return timeObj;
}

function unixTime(time){
    var dateObj = new Date( time );
    var timeObj = {
        unixtime : dateObj.getTime()
    }
    return timeObj;
}

var server = http.createServer( 
    function handleRequest( request, response ){
        if( request.method !== 'GET'){
            response.end('Send me a GET');            
        }
        var reqInfo = url.parse(request.url, true);
        console.log(reqInfo.path);
        console.log(reqInfo.query);
        if( reqInfo.query.iso === undefined ){
            response.end('Unkwnown query' + reqInfo.query);
        }
        
        var result;
        
        switch(reqInfo.pathname){
            case '/api/parsetime' :{
                result = parseTime( reqInfo.query.iso ); 
            break;
            }
            case '/api/unixtime':{
                result = unixTime( reqInfo.query.iso );
            break;
            }
            default:
                response.end('Unkwnown endpoint' + reqInfo.path);
        }
        if(result){
            response.writeHead(200, { 'Content-Type' : 'application/json'});
            response.end( JSON.stringify(result));
        }else{
            response.writeHead(404);
        }       
        
    }
);
server.listen( process.argv[2] );

// well, not that easy, but neither complex.
// I don't like that much the need to use the switch to check
// which api call has been made. I would prefer a more declarative appraoch
// DropWizard does better with its annotations, I wonder if there's something similar in node.js
// It would also be nice to have an automagical filter for the http method.
// probably there is some npm package that handle it.
// Or I should implement my own httpserver extending node.js module 