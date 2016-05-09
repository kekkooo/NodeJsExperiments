var through2 = require('through2');
var http   = require( 'http' );

var server = http.createServer(
    function(req, resp){
        
        if(req.method != 'POST' ){
            console.error('I need a POST request' );
        }        
        req
        .pipe( through2( 
                function (chunk, enc, callback ){
                chunk = chunk.toString().toUpperCase();
                this.push(chunk);
                callback();
        }))
        .pipe( resp );        
        
    }
)
server.listen(process.argv[2]);
