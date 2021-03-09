let fs = require('fs');
let path = require('path');

function putContent(inputArray,data) {

    let srcdest =  inputArray[0].split(">");

    let currentWorkingDirectory = process.cwd();

    const src = path.join(currentWorkingDirectory, srcdest[0].trim());
    const dest = srcdest[1].trim();
    
    fs.copyFile(src, dest, (error) => {
        console.log("Copied");
        if (error) {
            console.error(error);
            return;
        }
    });

}

module.exports = {
    fs:putContent
}






