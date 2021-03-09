let fs = require('fs');
let cwd = process.cwd();
let path = require('path');

function text(filename) {
    filename.forEach(element => {
        fs.readFile(path.join(cwd,element), { encoding: 'utf-8' }, function (err, data) {
            if (!err) {
                console.log(data);
            } else {
                console.log("File Does Not Exist");
            }
        });
    });
}

module.exports = {
    fs:text
}