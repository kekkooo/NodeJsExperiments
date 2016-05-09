var ws = require( 'websocket-stream' );
var stream = ws('ws://localhost:8099');
stream.write('hello\n', 'utf8');

//BOTTOMLINE
// nice, but after working on typescript it seems so strange to not 
// all the nice stuff you get wit TS and visual studio code
// I was stuck due to this line
// stram.write('hello\n', 'utf8');
// can you spot the error? GGRRR