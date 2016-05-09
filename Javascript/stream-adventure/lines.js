var through2 = require('through2');
var split    = require( 'split' );

var count = 1;
var tr = through2(    
    function (chunk, enc, callback ){
        if( count % 2 == 0 ){
            chunk = chunk.toString().toUpperCase();
        }else{
            chunk = chunk.toString().toLowerCase();
        }
        ++count;  
        // it was not clear from instructions that the + '\n' was needed      
        this.push( chunk + '\n' );
        callback();
    }
)

process.stdin.pipe(split()).pipe( tr ).pipe( process.stdout );