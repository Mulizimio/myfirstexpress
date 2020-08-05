// let fs = require('fs');
// let path = require('path');
// let dic = path.resolve(__dirname,'/dic.json');
var dic = { "version": "0", "data": {
        "a": [{ "value": "啊", "weight": 0, "key": "a" },
            { "value": "阿", "weight": 0, "key": "a" }],
        "e": [{ "value": "额", "weight": 0, "key": "e" },
            { "value": "鹅", "weight": 0, "key": "e" }],
        "o": [{ "value": "哦", "weight": 0, "key": "o" },
            { "value": "噢", "weight": 0, "key": "o" }]
    } };
var result = {};
// let data = JSON.stringify(dic.data);
// let dicData = JSON.parse(data);
// for(let i=0;i<dic.data.a.length;i++){
//     console.log(dic.data.a[i]);
// }
var obj = { "a": "啊阿", "e": "额鹅", "o": "哦噢" };
var obj1 = { a: "啊阿", e: "额鹅", o: "哦噢" };
// let newdic = {"version":"0",
//             "data":""};
//遍历dic
// let obj1 = obj;
for (var key in obj1) {
    var value = obj1[key];
    result[value] = key;
    delete obj1[key];
}
for (var key in result) {
    var value = result[key];
    obj1[key] = value;
    delete result[key];
}
console.log(obj);
console.log(obj1);
var transdic = {};
for (var key in obj1) {
    var str = key.split("");
    for (var i = 0; i < str.length; i++) {
        var k = str[i];
        transdic[k] = obj1[key];
    }
}
console.log(transdic);
for (var key in transdic) {
    console.log(key);
    // console.log(transdic[key]);
    // console.log(typeof transdic[key]);
}
var test = JSON.stringify(transdic);
var testa = JSON.parse(test);
console.log(testa);
