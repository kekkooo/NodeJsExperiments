var fs      = require( 'fs' );
var path    = require( 'path' );
var folder  = process.argv[2];
var ext     = process.argv[3];

function requiredExtension( fileName ){
    return path.extname( fileName ) === '.' + ext;
    //var splitted = fileName.split('.');
    //return ( splitted.length > 1 ) && ( splitted[ splitted.length - 1 ] == ext );
}

function filterFolder( err, names ){
    var filtered = names.filter( requiredExtension );
    for( name of filtered ){
        console.log( name );
    }    
}

fs.readdir( folder, filterFolder );