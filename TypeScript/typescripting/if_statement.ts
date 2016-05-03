/**
 * Startup
 */
class Startup {
    public static main() :number{
        var fruit : string = 'orange';
        var print : string;
        if( fruit.length > 5 ){
            print = 'The fruit name has more than five characters.';
        }else{
            print = 'The fruit name has five characters or less.';
        }
        console.log(print);
        return 0;        
    }
}

Startup.main();