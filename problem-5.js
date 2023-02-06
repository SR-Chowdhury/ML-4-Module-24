/**
 * Problem: 5
 * In this function first we validate the correct parameter. After that, collect the total diomond and consider a condition
 * if the totalDiamond is lest than double of 1000 it will return the totalDiamond
 * Oterwise, it will substract 2000 from totalDiamond and return it as output 
 */

function gemsToDiamond(x, y, z) {

    if (typeof x != 'number' || typeof y != 'number' || typeof z != 'number') {
        return 'Please provide three correct integer value!';
    }

    let firstFriend = x * 21;
    let secondFriend = y * 32;
    let thirdFriend = z * 43;
    let totalDiamond = firstFriend + secondFriend + thirdFriend;

    if (totalDiamond < 1000 * 2) {
        return totalDiamond;
    } else {
        return totalDiamond -= 2000;
    }
}

let result = gemsToDiamond(100, 5, 1);
console.log(result);
