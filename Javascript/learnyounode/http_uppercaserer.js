var http = require('http');
var map  = require('through2-map');
var port = process.argv[2];

var httpServer = http.createServer(
    function reqHandler( request, response ){
        var method = request.headers['method'];
        if(method === 'POST'){ 
        //    request.abort(); - only difference with the official solution
        res.end('send me a POST'); 
        }
        request.pipe( 
            map( function(chunk){
                return chunk.toString().toUpperCase();
            })).pipe(response)
    });
httpServer.listen(port);

// it took a while to discover how how to read request headers
// and if there is a way to automatically filter out non-POST requests