/**
 * Startup
 */
class Startup {
    public static main() :number{
        var n  : number = 128;
        // nice thing about TypeScript is that if I write :
        // n = n.toString();
        // tsc gives me an error for incompatible types so I need to write
        var ns : string = n.toString();
        // the type annotation is not needed, I used it just to enforce the concept
        console.log( ns );
        return 0;        
    }
}

Startup.main();