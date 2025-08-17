const removeFromArray = function(arr, ...int) {
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
        !int.includes(arr[i]) ? newArr.push(arr[i]) : null;
    }
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
