let fs = require('fs');
let path = require('path');
let dicjson = path.resolve(__dirname,'/dic.json');

var dic = {"version":"0","data":{
    "a":[{"value":"啊","weight":0,"key":"a"}
    ,{"value":"阿","weight":0,"key":"a"}]
    ,"e":[{"value":"额","weight":0,"key":"e"}
    ,{"value":"鹅","weight":0,"key":"e"}]
    ,"o":[{"value":"哦","weight":0,"key":"o"}
    ,{"value":"噢","weight":0,"key":"o"}]}};

// let data = JSON.stringify(dic.data);
// let dicData = JSON.parse(data);
// for(let i=0;i<dic.data.a.length;i++){
//     console.log(dic.data.a[i]);
// }

// var obj = { "a": "啊阿", "e": "额鹅", "o": "哦噢" };
var obj = { a: "啊阿吖嗄锕", e: "啊额鹅恶饿娥俄呃", o: "哦噢喔嚄" };
var obj1 = JSON.parse(JSON.stringify(obj));
let newdic = {"version":"0",
            "data":{}};
//遍历dic
// let obj1 = obj;
let transdic = {};

function trans(){
    var result = {};
    for(let key in obj1){
        let value = obj1[key];
        result[value] = key;
        delete obj1[key];
    }
    for(let key in result){
        let value = result[key];
        obj1[key] = value;
        delete result[key];
    }
    console.log(obj1);
    
    for(let key in obj1){
        let str = key.split("");
        for(let i = 0 ; i < str.length ; i++){
            let k = str[i];
            transdic[k] = obj1[key];
        }
    }
    console.log(transdic);
    
    for(let key in transdic){
        console.log(key);
    }
}
trans();
console.log(obj);

function initDic(callback){
    for (let key in transdic){
        newdic.data[key] = [];
        newdic.data[key].push({
            value:transdic[key],
            weight:0,
            key:key
        });
    }
    console.log(newdic);
    callback();
}

function outputLoc(){
    let outputLoc = path.resolve(__dirname,'./');
    console.log(typeof(outputLoc));
    fs.writeFile(path.resolve(outputLoc,`./transdic.json`),JSON.stringify(newdic),  function(err) {
        if (err) {
            throw err;
        }
     
        console.log('Hello.');
     
        // 写入成功后读取测试
        fs.readFile('./transdic.json', 'utf-8', function(err, data) {
            if (err) {
                throw err;
            }
            console.log(data);
        });
    });
}

function getDic(){
    initDic(function(){
        outputLoc();
    })
}

getDic();