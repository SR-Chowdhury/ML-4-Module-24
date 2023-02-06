/**
 * Problem: 3
 * this function will take an integer number than subtracte 7 from the parameter. 
 * After that use a condition if the difference is less than 7 than it will return the difference.
 * Or, if it is greater than or equal to 7, it will return double of the given number.
 */

function isLGSeven(num) {

    let difference;

    if (typeof num !== 'number') {
        return 'Please provide an integer value!';
    }

    difference = num - 7;

    if (difference < 7) {
        return difference;
    } 
    else {
        return num * 2;
    }
}


let result = isLGSeven(15);
console.log(result);
