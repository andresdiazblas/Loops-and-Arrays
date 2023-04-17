// Only Odds
// Create a for loop to go through all the numbers in an array in ascending order and use push to add the numbers that meet the criteria into the code.

// const numbers = [2, 4, 6, 8, 11, 20, 15, 22]
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]	
// const numbers = [70, 42, 55, 81, 21, 91, 34]	
const numbers = [2, 4, 6, 8, 10, 11, 12]

const odds = [];
console.log('The set of numbers is', numbers);

for(const num of numbers){
    if(num%2 === 1){
        odds.push(num);
    }
}
console.log('Odd numbers are',odds);

