/// <reference path="typings/main.d.ts" />
import http   = require( 'http' );

class Startup {        
    public static main( ) :number{
        var url  : string       = process.argv[2];
        var allData : string    = '';
        http.get( process.argv[2], function( response ){
        response.setEncoding( 'utf8' );
        response.on( 'data',  (data) => allData +=data );
        response.on( 'error', console.error );
        response.on( 'end', () => {
            console.log(allData.length);
            console.log(allData);
        }); 
});
                
        return 0;        
    }
}
Startup.main( );

//BOTTOMLINE
// so simple that there is no difference between this and js