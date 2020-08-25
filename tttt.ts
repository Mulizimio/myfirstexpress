let fsh = require('fs');
let pathh = require('path');
let dicjsonh = pathh.resolve(__dirname,'./testdic.json');
let test = {};

function readdic(callback){
    fsh.readFile(dicjsonh,'utf-8',(err,data)=>{
        if(err){
            throw err;
        } else{
            if(typeof(data) === 'string'){
                test =JSON.parse(data);}
                console.log(test);
                callback(data);
        }
    });
}
readdic(function (data) {
    console.log(data)
})