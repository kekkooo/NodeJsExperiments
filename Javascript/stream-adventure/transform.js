var through2 = require('through2');

var tr = through2(
    function (chunk, enc, callback ){
        chunk = chunk.toString().toUpperCase();
        this.push(chunk);
        callback();
    }
)

process.stdin.pipe( tr ).pipe( process.stdout );