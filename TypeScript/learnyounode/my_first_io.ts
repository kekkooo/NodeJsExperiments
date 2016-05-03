/// <reference path="typings/main.d.ts" />

import fs = require( 'fs' );

class Startup {        
    public static main( ) :number{
        var path : string = process.argv[2];
        var numCR = fs.readFileSync( path, 'utf8').split('\n').length;
        console.log( numCR - 1 );
        return 0;        
    }
}
Startup.main( );