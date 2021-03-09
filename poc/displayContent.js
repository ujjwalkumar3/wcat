const fs = require('fs');

function display(fileName) {
    fileName.forEach(element => {
        fs.readFile(element, { encoding: 'utf-8' }, function (err, data) {
            if (!err) {
                console.log(data);
            } else {
                console.log("File Does Not Exist");
            }
        });
    });
}

module.exports = {
    fs: display
}