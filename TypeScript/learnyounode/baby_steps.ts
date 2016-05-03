/// <reference path="typings/main.d.ts" />
/**
 * Since TypeScript Compiler does not know 'process', 
 * we need to do some things.
 * -First install the package 'typings' with : 
 * npm install typings --global
 * -then install the needed NodeJs definitions
 * typings install --save --ambient node 
 * after that, the very first line of this file will do the trick.
 * It should be better to use the tsconfig.json file, 
 * however I was not able to make it work in that way.
 */
class Startup {
    public static main( ) :number{
        var total = 0;
        for( var i = 2; i < process.argv.length; ++i){
            total += Number( process.argv[i] );
        }
        console.log( total );
        return 0;        
    }
}
Startup.main( );
