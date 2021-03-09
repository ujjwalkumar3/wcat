let fs = require('fs');
let cwd = process.cwd();
let path = require('path');
let putContents = require('./putContent')

function minusS(fileName) {
    console.log(fileName);

    let finalString = "";
    let fileplusdir = "";
    let src ="";
    let dest ="";

    if(!fileName[1].includes('>')) {
        fileplusdir = path.join(cwd, fileName[1]);
        fs.readFileSync(fileplusdir, 'utf-8').split("\r\n").forEach(function (line) {
            if (line.length != 0) {
                finalString = finalString +line+"\r\n";
                if (!fileName[1].includes(">")) {
                    console.log(line);
                }
            }
        });
    }

    else {
        let srccommadest = fileName[1].split(">");
         src = path.join(cwd, srccommadest[0].trim());
         dest = srccommadest[1].trim();

         fs.readFileSync(src, 'utf-8').split("\r\n").forEach(function(line) {
            if (line.length != 0) {
                finalString = finalString+  line + "\r\n";
            }
        });

        fs.writeFile(dest, finalString, function (err) {
            if (err) throw err;
            console.log('Saved!');
          });
    }
}

module.exports = {
    fs: minusS
}

