var http = require('http');
var url  = process.argv[2];

http.get(url, function(response){
    var global_counter = 0;
    var global_data    = '';
    response.setEncoding('utf8');
    response.on( 'data',  function(data){
        global_data    += data;
        global_counter += data.length;
    });
    response.on( 'error', console.log);
    response.on( 'end', function(data){
        console.log(global_counter);
        console.log(global_data);
    })
})

// BOTTOMLINE
// Without reading hints I used the approach [1] proposed by learnyounode
// In this case I think it is reasonable to define anonymous functions
// because I need to close the counter and data variables within
// the dataEvent and endEvent callbacks.