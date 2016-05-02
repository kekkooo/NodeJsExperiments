var http = require('http');
var bl   = require('bl');
var url  = process.argv[2];

http.get(url, function(response){
    
    // essentially bl accumulates data and allows you to define
    // a single callback that will be executed at the end of the response
    response.pipe( bl( function(err, data){
        if(err){ 
            console.error(err); 
        }
        data = data.toString();
        console.log(data.length);
        console.log(data);
    }
    ));
})

// BOTTOMLINE
// less code, less error-prone. there are performance concerns?