const fs = require('fs');

const inputData = fs.readFileSync('input.txt', 'utf-8');
// const inputData = fs.readFileSync('sampleinput.txt', 'utf-8').trim();

const reports = inputData.split('\n').map(line => line.trim().split(/\s+/).map(Number)); //split by newline(/n) and whitespace(/\s/)

// console.log(reports);

// Safe requirements:
// So, a report only counts as safe if both of the following are true:

// - The levels are either all increasing or all decreasing.
// - Any two adjacent levels differ by at least one and at most three.

const isSafeReport = (levels) => {
    let isIncreasing = true;
    let isDecreasing = true;

    if (levels.length < 2) return false;

    // console.log(levels.length);

    for (let i =1; i < levels.length; i++) { //start at the second element, since we're checking if it increased or decreased from the first element
        const diff = levels[i] - levels[i-1]; //current number minus the previous number

        if (Math.abs(diff) < 1 || Math.abs(diff) > 3) { //abs makes sure it counts negative values
            // console.log(`Invalid difference in report ${levels}: ${diff}`);
            return false; // Difference not in the range of 1 to 3
        }
        if (diff < 0) isIncreasing = false;
        if (diff > 0) isDecreasing = false;
    }

    const result = isIncreasing || isDecreasing;
    // console.log(`Report ${levels}: isIncreasing=${isIncreasing}, isDecreasing=${isDecreasing}, result=${result}`);
    return result;
}

// console.log(isSafeReport);

const safeCount = reports.filter(isSafeReport).length; //length since we're checking how many we need
console.log(`Number of safe reports: ${safeCount}`);
