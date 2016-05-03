/// <reference path="typings/main.d.ts" />

import fs = require( 'fs' );

class Startup {        
    public static main( ) :number{
        var path : string = process.argv[2];
        fs.readFile( path, 'utf8', (err, data)=>{
            if(err){ console.error(err); }
            else{
                console.log( data.split('\n').length - 1 );
            }
        });        
        return 0;        
    }
}
Startup.main( );