var fsh = require('fs');
var pathh = require('path');
var dicjsonh = pathh.resolve(__dirname, './testdic.json');
var test = {};
function readdic(callback) {
    fsh.readFile(dicjsonh, 'utf-8', function (err, data) {
        if (err) {
            throw err;
        }
        else {
            if (typeof (data) === 'string') {
                test = JSON.parse(data);
            }
            console.log(test);
            callback(data);
        }
    });
}
readdic(function (data) {
    console.log(data);
});
