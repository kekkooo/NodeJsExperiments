// load a core module (file-system)
var fs      = require( 'fs' );
var path    = process.argv[2];

var buffer = fs.readFileSync( path );
buffer = buffer.toString();
var lines = buffer.split( '\n' );

console.log( lines.length - 1 );