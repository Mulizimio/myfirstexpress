var fst = require('fs');
var patht = require('path');
var dicjsont = patht.resolve(__dirname, './testdic.json');
var obj2 = {};
var new_dic = { "version": "0",
    "data": {} };
function read_dic() {
    fst.readFile(dicjsont, 'utf-8', function (err, data) {
        if (err) {
            throw err;
        }
        else {
            if (typeof (data) === 'string') {
                var test = JSON.parse(data);
                var trytest = eval(test);
                var jsondata = trytest.data;
                var dic_origindata = [];
                for (var key in jsondata) {
                    for (var i = 0; i < jsondata[key].length; i++) {
                        dic_origindata.push(jsondata[key][i]);
                    }
                }
                // console.log(dic_origindata);
                for (var i = 0; i < dic_origindata.length; i++) {
                    var key = dic_origindata[i].value;
                    var value = dic_origindata[i].key;
                    obj2[key] = value;
                    // console.log(dic_origindata[i].key);
                }
                function init_Dic(callback) {
                    for (var key in obj2) {
                        new_dic.data[key] = [];
                        new_dic.data[key].push({
                            value: obj2[key],
                            weight: 0,
                            key: key
                        });
                    }
                    console.log(new_dic);
                    callback();
                }
                function output_Loc() {
                    var output_Loc = patht.resolve(__dirname, './');
                    console.log(typeof (output_Loc));
                    fst.writeFile(patht.resolve(output_Loc, "./new_dic.json"), JSON.stringify(new_dic), { 'flag': 'a' }, function (err) {
                        if (err) {
                            throw err;
                        }
                        console.log('Hello.');
                    });
                }
                function get_Dic() {
                    init_Dic(function () {
                        output_Loc();
                    });
                }
                get_Dic();
            }
        }
    });
}
read_dic();
// function init_Dic(callback){
//     for (let key in obj2){
//         new_dic.data[key] = [];
//         new_dic.data[key].push({
//             value:obj2[key],
//             weight:0,
//             key:key
//         });
//     }
//     console.log(new_dic);
//     callback();
// }
// function output_Loc(){
//     let output_Loc = patht.resolve(__dirname,'./');
//     console.log(typeof(output_Loc));
//     fst.writeFile(patht.resolve(output_Loc,`./new_dic.json`),JSON.stringify(new_dic), { 'flag': 'a' }, function(err) {
//         if (err) {
//             throw err;
//         }
//         console.log('Hello.');
//     });
// }
// function get_Dic(){
//     init_Dic(function(){
//         output_Loc();
//     })
// }
// get_Dic();
