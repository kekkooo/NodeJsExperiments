var through2 = require('through2');
var trumpet  = require('trumpet');

var tr = trumpet();
var tr_stream = tr.select('.loud').createStream();
    tr_stream
     .pipe(
        through2( function( chunk, _, callback ){
                this.push( chunk.toString().toUpperCase() );
                callback();
        }))
    .pipe(tr_stream);        
    

process.stdin.pipe( tr ).pipe( process.stdout );

//BOTTOMLINE
// It was a little hard to understand.
// However it makes sense, since tr_stram is full duplex I can read its stream
// and then write into it.