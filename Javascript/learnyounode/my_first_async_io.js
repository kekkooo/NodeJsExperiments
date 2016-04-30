// load a core module (file-system)
var fs      = require( 'fs' );
var path    = process.argv[2];

function logResult( no_lines ){
    console.log( no_lines );
}
// assume data is a string
function countLines( err, data ){
    if(!err){         
        logResult( data.split( '\n' ).length - 1 );
    }    
}
fs.readFile( path, 'utf8', countLines );


