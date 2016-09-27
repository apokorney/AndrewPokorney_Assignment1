/**
 * Created by andrew.pokorney on 9/22/2016.
 * Primes Program
 */
    function primeNum(index) {
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
        primes.push(n);     //this was cool method, didn't know how to push to an array
        n += 2;}
    return primes[index - 1];}


    console.log(primeNum(10001));