/**
 * Startup
 */
class Startup {
    public static main() :number{
        var total = 0;
        var limit = 10;
        for( var i = 0; i < limit; ++i ){
            total += i;
        }        
        console.log( total );
        return 0;        
    }
}

Startup.main();