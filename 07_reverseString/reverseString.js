const reverseString = function(string) {
    let array = string.split('');
    let reversedArray = [];

    for (let i = array.length - 1; i >=0 ; i--) {
        reversedArray.push(array[i]);
    }
    return reversedArray.join('');
};

// Do not edit below this line
module.exports = reverseString;
