/**
 * Problem: 2
 * The below function will take a string value then after validation it will check the length of that string and
 * if the lenth is devided by two [has no reminder] that means it is 'Even' otherwise it is 'Odd'
 */

function evenOdd(str) {

    if (typeof str !== 'string') {
        return 'Please provide a String value!';
    }

    if (str.length %2 == 0) {
        return 'even';
    } else {
        return 'odd';
    }

}

let result = evenOdd('chatgpt');
console.log(result);