/// <reference path="typings/main.d.ts" />
/// <reference path="./module.ts" />
//import dirHelper = require('module');

import * as dirHelper from "./module";

var path = process.argv[2];
var ext  = '.' + process.argv[3];


dirHelper.filteredLS(path,ext,
function(err,data){
    if(err){
        console.error(err);
    }else{
        var size : number = data.length;
        for( var i = 0; i < size; ++i){
            console.log(data[i]);
        }
    }
}); 