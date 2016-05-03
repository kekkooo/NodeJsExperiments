/**
 * Startup
 */
class Startup {
    public static main() :number{
        var numbers = [1,2,3,4,5,6,7,8,9,10];
        var filtered = numbers.filter( function(number) {
            return number % 2 === 0;
        });
        /*var limit = 10;
        for( var i = 0; i < limit; ++i ){
            total += i;
        } */       
        console.log( filtered );
        return 0;        
    }
}

Startup.main();