var fs      = require( 'fs' );
var path    = require( 'path' );

module.exports = function( folder, ext, callback ){    
    function requiredExtension( fileName ){
        return path.extname( fileName ) === '.' + ext;
    }

    function filterFolder( err, data ){
        if( err ){ 
            return callback(err); 
        }
        var filtered = data.filter( requiredExtension );              
        return callback( err, filtered );                    
    }
    fs.readdir( folder, filterFolder );
}