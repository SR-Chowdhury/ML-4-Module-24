/**
 * Problem: 1
 * This function just doing some sample mathmetical operation. First, it multiply the given number by 3 times, 
 * After that add 10 to the current value and again devided by 2 and finally substruct 5 from final value.
 * Lastly, return the current value.
 */
function mindGame(num) {

    if (typeof num != 'number') {
        return 'Please give a number!'
    }
    num *= 3;
    num += 10;
    num /= 2;
    num -= 5;
    return num;
}

let result = mindGame(33);
console.log(result);