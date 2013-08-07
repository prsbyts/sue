#!/usr/bin/env node

//Check primality
var isPrime = function(n){
    var prime = true;
    if(n>2){
        var i = 2;
        var k=Math.ceil(Math.sqrt(n));
        while(i<=k){
               if(n%i == 0){
                prime = false;
               }
               i++;
        }
    }
    return prime;
};


//Function to write first k primes
var firstKPrimes = function(k){
    var i = 2, t = 0;
    var arr = [];
    while(t<k){
        if(isPrime(i)){
            arr.push(i);
	    t++;
        }
	i++;
    }
    return arr;
};

var fmt = function(arr){
    return arr.join(",");
};

//First 100 primes
var k = 100;

//Prepare filestream
var fs = require('fs');
var output_file = "primes.txt";

//Create output string
//var output = "The first " + k + " prime numbers are:\n";
//output += fmt(firstKPrimes(k));
var output = fmt(firstKPrimes(k)) + "\n";

//Write to file
fs.writeFileSync(output_file, output);

//Confirmation message.
console.log("Done!");
