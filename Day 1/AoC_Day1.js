const fs = require('fs')

leftList = []
rightList = []

function calcTotalDist(leftList, rightList) {
    leftList.sort((a,b) => a-b);
    rightList.sort((a,b) => a-b);

    // console.log("Sorted Left List:", leftList);
    // console.log("Sorted Right List:", rightList);

    let totalDist = 0;

    for (let i = 0; i < leftList.length; i++) {
        totalDist += Math.abs(leftList[i] - rightList[i])
        // console.log(`Pair (${leftList[i]}, ${rightList[i]}): Distance = ${distance}`);
    }

    return totalDist;
}

fs.readFile('input.txt', 'utf-8', (error, data) => {
    if (error) {
        console.error('Error reading the file: ', error);
        return;
    }

    // console.log(data);

    const readlines = data.split('\n');

    readlines.forEach(readline => {
        const [left, right] = readline.split(/\s+/).map(Number);  //split() helps to further split each line by the whitespace '/\s+/'
        
        leftList.push(left); //when split, the first value is assigned to left and the second is assigned to right
        rightList.push(right); // then each get put into their respective arrays
    });

    const result = calcTotalDist(leftList, rightList);
    console.log(result);
})

