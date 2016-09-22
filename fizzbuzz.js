/**
 * Created by andrew.pokorney on 9/22/2016.
 * Problem 1: Fizzbuzz:
 * Create a Node.js called fizzbuzz.js that will do the following:
 *      Prints the numbers from 1 to 100
 *      Except for multiples of 3 print "Fizz" instead of the number, and "Buzz" for multiples of 5
 *      For numbers which are multiples of both 3 and 5 print "FizzBuzz"
 */

for (var i = 1; i <= 100; i++){
    if (i % 15 === 0){
        console.log("FizzBuzz");
    }
    else if (i % 5 === 0){
        console.log("Buzz");
    }
    else if (i % 3 === 0){
        console.log("Fizz");
    }
    else {console.log(i);
    }
}
