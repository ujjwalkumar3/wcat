const fs = require('fs');
const path = require('path');

function appendContent(input) {
    let srcdest =  input[0].split(">>");
    let cwd = process.cwd();

    console.log(srcdest);

    const src = path.join(cwd, srcdest[0].trim());
    const dest = srcdest[1].trim();

        fs.readFile(src, { encoding: 'utf-8' }, function (err, data) {
        if (!err) {
            fs.appendFile(dest, data, function (err) {
                if (err) throw err;
                console.log('Updated');
              });
        } else {
            console.log("File Not Exist");
        }
    });

}

module.exports = {
    fs: appendContent
}