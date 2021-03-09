let fs = require("fs");
let path = require("path");

let input = process.argv.slice(2);

let txt = require("./commands/text");
let minusB = require("./commands/minusB");
let minusN = require("./commands/minusN");
let minusS = require("./commands/minusS");
let putContent = require("./commands/putContent");
let appendContent = require("./commands/appendContent");

if(input[0] == '-s'){
    minusS.fs(input);
}else if(input[0] == '-n'){   
    minusN.fs(input[1]);
}else if(input[0] == '-b'){
    minusB.fs(input[1]);
}else if(input[0].includes('>>')){
    appendContent.fs(input);
}else if(input[0].includes('>')){
    putContent.fs(input);
}else if(path.extname(input[0]).length != 0){
    txt.fs(input);
}else{
    console.log("wrong command");
}