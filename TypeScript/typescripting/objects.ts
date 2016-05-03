/**
 * I will use this excercise to experiment TypeScript classes
 * PLEASE NOTE
 * This will not solve the corresponding javascripting excercise
 * Problem is that when printing a named class, it prints the class name too
 */

class Pizza {
    // properties
    toppings : Array<string>;
    crust    : string;
    serves   : number;
    constructor(toppings : Array<string>, crust : string, serves : number ) {
        this.toppings   = toppings;
        this.crust      = crust;
        this.serves     = serves;                
    }    
}

class Startup {
    public static main() :number{
        var toppings = ['cheese', 'sauce', 'pepperoni'];
        var pizza = new Pizza(toppings, 'deep dish', 2 );
        // comment the above and uncomment the following
        // to make it pass javascripting objects
        /*
        var pizza = { 
                toppings : toppings,
                crust    : 'deep dish',
                serves   : 2
            };
        */      
        console.log( pizza );
        return 0;        
    }
}

Startup.main();