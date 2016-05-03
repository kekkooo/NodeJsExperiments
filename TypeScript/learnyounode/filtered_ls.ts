/// <reference path="typings/main.d.ts" />

import fs   = require( 'fs' );
import path = require( 'path' );

class Startup {        
    public static main( ) :number{
        var dirPath : string = process.argv[2];
        var requiredExtension = '.' + process.argv[3];
        
        fs.readdir( dirPath, (err,files)=>{
            if(err){ console.error(err); }
            else{
                var filtered = files.filter(( 
                    fileName => path.extname(fileName) === requiredExtension  ));
                var numFiles = filtered.length;
                for( var i = 0; i < numFiles; ++i ){
                    console.log( filtered[i] );
                }
            }
        })        
        return 0;        
    }
}
Startup.main( );