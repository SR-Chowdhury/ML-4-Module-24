/**
 * Problem: 4
 * Here we checked the array value whether it is less than '0' or not; 
 * If less than '0' then we count it as bad data and return the sum of bad data. 
 */

function findingBadData(arr) {

    if (Array.isArray(arr) != true) {
        return 'Please provide an array!';
    }

    let sum = 0;
    for (let i = 0; i < arr.length; i ++) {
        if (arr[i] < 0) {
            sum++;
        }
    }
    return sum;
}

const arr =  [ -4, -9, -5, -33, -55 ];
let result = findingBadData(arr);
console.log(result);
