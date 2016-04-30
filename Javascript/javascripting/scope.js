var a = 1, b = 2, c = 3;
(function firstFunction(){
    var b = 5, c = 6;

    (function secondFunction(){
        var b = 8;
        console.log("a: "+a+", b: "+b+", c: "+c);
        (function thirdFunction(){
            var a = 7, c = 9;

            (function fourthFunction(){
                var a = 1, c = 8;

            })();
        })();
    })();
})();

/*
before first :  1, 2, 3
after  first :  1, 5, 6
after second :  1, 8, 6
after  third :  7, 2, 9
after fourth :  1, 2, 8

*/

// place :
// console.log("a: "+a+", b: "+b+", c: "+c);
// desired output
// a: 1, b: 8, c: 6