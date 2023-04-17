// Vowel vs Consanant
//  Write a function that takes a string as an input - complete
// Create a loop that iterates over the input string - complete
// Create a variable with a value of array of vowels - complete
// Create a count variable for vowels - complete
// Create a count variable for consanants - complete
// Check if each character is a vowel or a consanant - complete
// Increase count of variables by 1 if vowel - complete
// Increase count of varibale by 1 if consanant - complete
// Return string and number of vowels and consanants - complete
// Print return values - complete

const numberOfVowelsAndConsanants = (str) => {
    let vowelsArr = ['a', 'e', 'i', 'o', 'u']
    let vowelCount= 0
    let consanantCount = 0
    for(let i = 0; i < str.length; i++){
        // if (vowelsArr.includes(str[i])) {
        //     vowelCount++
        // }else{
        //     consanantCount++
        // }
        vowelsArr.includes(str[i]) ? vowelCount++ : consanantCount++;
    }
    return `${str} has ${consanantCount} consanants and ${vowelCount} vowels`
}

const returnString = numberOfVowelsAndConsanants('hello');
// const returnString = numberOfVowelsAndConsanants('ukelele');
// const returnString = numberOfVowelsAndConsanants('awesome');
// const returnString = numberOfVowelsAndConsanants('onomonopia');
// const returnString = numberOfVowelsAndConsanants('textbook');

console.log(returnString);

