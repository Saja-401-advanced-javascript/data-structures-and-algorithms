'use strict'


function BinarySearch(arr, val) {
    let output;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            output = i;
            break
        } else { 
            output = -1 ;}
    }
    return output
}

module.exports = BinarySearch