"use strict";

console.log("hello hector");
console.log("mac");
console.log("henry");
console.log("mary");
console.log("lorian");

function sayHello(name){
    console.log("Hello " + name);
//    we will talk about returning later!
}

sayHello("Vivian");
sayHello("Sophie");


//Write a function that takes a string and returns true if all of the characters are the same case,  false otherwise.
function caseSensitive(string){
    return string === string.toLowerCase() || string === string.toUpperCase();
}

console.log(caseSensitive("hello world"))
console.log(caseSensitive("HELLO WORLD"))
console.log(caseSensitive("HEllO wOrld"))
console.log(caseSensitive("CAPITAl"))
console.log(caseSensitive("lowercase"))
console.log(caseSensitive("RanDom"))

//write a function that turn a string into in array of words
inputArray.forEach(function(element){
   console.log(element)
});