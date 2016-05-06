/// <reference path="typings/main.d.ts" />
import http   = require( 'http' );


http.get( process.argv[2], function( response ){
    response.setEncoding( 'utf8' );
    response.on( 'data',  console.log );
    response.on( 'error', console.error ); 
});

//BOTTOMLINE
// so simple that there is no difference between this and js