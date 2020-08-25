let fst = require('fs');
let patht = require('path');
let dicjsont = patht.resolve(__dirname,'./testdic.json');

let obj2 = {};
let new_dic = {"version":"0",
            "data":{}};
function read_dic(){
    fst.readFile(dicjsont,'utf-8',(err,data)=>{
        if(err){
            throw err;
        } else{
            if(typeof(data) === 'string'){
                let test =JSON.parse(data);
                let trytest = eval(test);
                let jsondata = trytest.data;
                let dic_origindata = [];
                for(let key in jsondata){
                    for(let i = 0 ; i < jsondata[key].length ; i++){
                        dic_origindata.push(jsondata[key][i]);
                    }
                }
                // console.log(dic_origindata);
                for (let i = 0 ; i < dic_origindata.length ; i++){
                    let key = dic_origindata[i].value;
                    let value = dic_origindata[i].key;
                    obj2[key] = value;
                    // console.log(dic_origindata[i].key);
                }

                function init_Dic(callback){
                    for (let key in obj2){
                        new_dic.data[key] = [];
                        new_dic.data[key].push({
                            value:obj2[key],
                            weight:0,
                            key:key
                        });
                    }
                    console.log(new_dic);
                    callback();
                }
                
                function output_Loc(){
                    let output_Loc = patht.resolve(__dirname,'./');
                    console.log(typeof(output_Loc));
                    fst.writeFile(patht.resolve(output_Loc,`./new_dic.json`),JSON.stringify(new_dic), function(err) {
                        if (err) {
                            throw err;
                        }
                     
                        console.log('Hello.');
                    });
                }
                
                function get_Dic(){
                    init_Dic(function(){
                        output_Loc();
                    })
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