/// <reference path="typings/main.d.ts" />
import fs   = require( 'fs' );
import path = require( 'path' );

    export function filteredLS(dir, extension, callback){
        
        fs.readdir( dir, (err,files)=>{
            if(err){ 
                console.error(err);
                return callback( err ); 
            }
            else{
                var filtered = files.filter(( 
                    fileName => path.extname(fileName) === extension  ));                   
                return callback(err, filtered);
            }
        })
    }
