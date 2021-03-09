let fs = require('fs');

function lineNumber(fileNamePath) {
    let count = 1;
    fs.readFileSync(fileNamePath, 'utf-8').split(/\r?\n/).forEach(function(line){
        console.log(count+"\t",line);
        count++;
      })
}

module.exports = {
    fn:lineNumber
}