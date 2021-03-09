let fs = require('fs');
let cwd = process.cwd();
let path = require('path');

function minusN(fileName) {
    let count = 1;
    let fileNamePath = path.join(cwd,fileName);
    fs.readFileSync(fileNamePath, 'utf-8').split(/\r?\n/).forEach(function(line){
        console.log(count+"\t",line);
        count++;
      })

}

module.exports = {
    fs:minusN
}