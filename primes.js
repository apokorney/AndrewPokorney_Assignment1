/**
 * Created by andrew.pokorney on 9/22/2016.
 */

//figure out 2,3,5,7,11,13....10,001th
    //104,743 is the actual solution

// var isPrime = function (num1){
//         if (n % n === 0) {
//             console.log(n)
//             return true
//         }
//     }
//
// for(var i = 1; i = )


    function prime(index) {
        var i, primes = [2, 3], n = 5;

    function isPrime(n) {
        var i = 1, p = primes[i],
            limit = Math.ceil(Math.sqrt(n));
        while (p <= limit) {
            if (n % p === 0) {
                return false;}
            i += 1;
            p = primes[i];}
        return true;}

    for (i = 2; i <= index; i += 1) {
        while (!isPrime(n)) {
            n += 2;}
        primes.push(n);
        n += 2;}
    return primes[index - 1];}

console.log(prime(1e4 + 1));