const fs = require('fs');

const inputFilePath = 'input.txt';
// const inputFilePath = 'sampleinput.txt';
input = fs.readFileSync(inputFilePath, 'utf-8');

//regex to match valid mul instructions "mul(x,y)"
// mul\( --> matches 'mul('
// (\d{1.3}) --> matches grp of digits of length 1 to 3
// , --> matches ','
//\) --> matches ')'
//g --> searches globally for all matches
const mulRegex = /mul\((\d{1,3}),(\d{1,3})\)/g;

let match;
let sum = 0;

while ((match = mulRegex.exec(input)) !== null) {
    const num1 = parseInt(match[1], 10);
    const num2 = parseInt(match[2], 10);

    // console.log(`Num1: ${num1}`);
    // console.log(`Num2: ${num2}`);

    sum += num1 * num2;
}

console.log(`Sum: ${sum}`);