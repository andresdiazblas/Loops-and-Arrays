// FizzBuzz

// Write a function  that loops through 1 to 100
// No inputs or outputs requires
// check if divisible by 3 and 5 and print FizzBuzz
// check if divisible by 3 and print Fizz
// check if divisible by 5 and print Buzz

const FizzBuzz = () => {
    for(let i=3 ; i <= 100; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log('FizzBuzz',i)
        }else if (i%3 ===0){
            console.log('Fizz', i)
        }else if (i%5 === 0){
            console.log('Buzz', i)
        }
    }
};

FizzBuzz();

// i is 1, i will add to itself repeatedly until variable turns into 101, code will stop