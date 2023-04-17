// Reverse Array

// create a function that takes an array as an input - complete
// create a variable called newArray with empty array as a value - complete
// iterate over input array backwards - complete
// for each value in array push to newArray - complete
// return newArray
// invoke function


const reverseArray = (arr) => {
    const newArray = []

// Adds at the end
    // for (let i = arr.length - 1; i >= 0; i--){
    //     newArray.push(arr[i])
    // }

// Adds at the beginning
    for (let i = 0; i < arr.length; i++){
        newArray.unshift(arr[i])
    }

        return newArray;

// Super simple way
    // return arr.reverse();
};

console.log (reverseArray(['1', '2', '3', '4', '5']));