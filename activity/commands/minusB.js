let fs = require('fs');
let cwd = process.cwd();
let path = require('path');

function minusB(fileName) {
    let count = 1;
    let fileplusdir = path.join(cwd, fileName);
    fs.readFileSync(fileplusdir, 'utf-8').split("\r\n").forEach(function(line) {
        if(line.length != 0) {
            console.log(count + "\t", line);
            count = count + 1;
        }
    });
}

module.exports = {
    fs: minusB
}