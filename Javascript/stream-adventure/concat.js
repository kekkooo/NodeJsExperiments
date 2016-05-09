var concat = require('concat-stream');

process.stdin.pipe(
    concat( function(entireBody){
        // I don't like this solution for string reversing,
        // but it was the first JS implementation I found.
        var res = entireBody.toString().split('').reverse().join('');
        console.log( res );
    }));