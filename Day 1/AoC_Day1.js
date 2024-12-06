const fs = require('fs')

leftList = []
rightList = []

//Part 1
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

//Part 2
function calcSimilarity(leftList, rightList) {
    //Count occurences of each no. in the right list
    const rightCount = {}; // data will be saved in key:value (i.e num:count)

    rightList.forEach(num => {
        rightCount[num] = (rightCount[num] || 0) + 1; // if rightcount[num] exists and not undefined uses that value or 0, uses that value. If it is undefined, it means its a value not seen yet and uses 0.
    });

    // console.log("Right List Counts:", rightCount);

    let similarityScore = 0;
    leftList.forEach(num => {
        const rightCounter = rightCount[num] || 0;
        similarityScore += num * rightCounter;
    });

    return similarityScore;
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

    //Part 1 solution
    const result1 = calcTotalDist(leftList, rightList);
    console.log(result1);

    //Part 2 solution
    const result2 = calcSimilarity(leftList, rightList);
    console.log(result2);
})

