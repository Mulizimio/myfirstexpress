let fsa = require('fs');
let patha = require('path');

//原始数据
var obj = { a: "啊阿吖嗄锕", e: "啊额鹅恶饿娥俄呃", o: "哦噢喔嚄" };
//复制数据 避免直接传址影响原始数据
var obj1 = JSON.parse(JSON.stringify(obj));
//最终输出的数据格式
let new_dict = {"version":"0",
            "data":{}};

//初始化 将数据push到最终数据中
function init_Dic(callback){
    for (let key in obj1){
        new_dict.data[key] = [];
        for(let i = 0 ; i < obj1[key].length ; i++){
            new_dict.data[key].push({
                value:obj1[key][i],
                weight:0,
                key:key
            });
        }
    }
    console.log(new_dict);
    callback();
}

//输出处理后的数据文件
function output_Loc(){
    let output_Loc = patha.resolve(__dirname,'./');
    console.log(typeof(output_Loc));
    fsa.writeFile(patha.resolve(output_Loc,`./dic.json`),JSON.stringify(new_dict),  function(err) {
        if (err) {
            throw err;
        }
     
        console.log('Hello.');
     
        // 写入成功后读取测试
        fsa.readFile('./dic.json', 'utf-8', function(err, data) {
            if (err) {
                throw err;
            }
        });
    });
}

//
function get_Dic(){
    init_Dic(function(){
        output_Loc();
    })
}

get_Dic();

let transdicList = [];

function pushTransList(callback){
    for(let key in new_dict.data){
        for (let i = 0 ; i < new_dict.data[key] ; i++){
            transdicList.push({
                value : new_dict[key][i],
                weight : 0,
                key : key
            })
        }
    }
    console.log(transdicList);
    callback();
}

function outputTransList(){
    let output_Loc = patha.resolve(__dirname,'./');
    console.log(typeof(output_Loc));
    fsa.writeFile(patha.resolve(output_Loc,`./translist.json`),JSON.stringify(transdicList),  function(err) {
        if (err) {
            throw err;
        }
    });
}

pushTransList(function(){
    outputTransList();
});