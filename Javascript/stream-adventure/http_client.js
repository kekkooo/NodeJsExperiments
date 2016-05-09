var request = require( 'request' );
var url     = 'http://localhost:8099';
process.stdin
    .pipe( request.post(url) )
    .pipe(process.stdout);