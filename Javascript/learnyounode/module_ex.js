var mymodule = require( './module.js' );

function printFiltered( err, names ){
    if(err) { console.log( 'there was an error' ) };
    for( name of names ){
            console.log( name );
    }
}

mymodule( process.argv[2], process.argv[3], printFiltered );