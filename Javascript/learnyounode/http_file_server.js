var http = require('http');
var fs   = require('fs');
var port = process.argv[2];
var file = process.argv[3];

var httpServer = http.createServer(
    function reqHandler( request, response ){
        var fileStream = fs.createReadStream(file);
        fileStream.pipe(response);
    });
httpServer.listen(port);

// pretty easy.