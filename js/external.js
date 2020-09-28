"use strict";

// part 1

console.log("Hello from external JavaScript");

alert("welcome to my Website!")

var userColor = prompt("what is your favorite color?")
console.log("userColor");
alert("Great, " + userColor + " is my favorite color too!")

// part 2

var DaysLM = Number(prompt("How many days will you be renting The little mermaid for?"));
var DaysBB =  Number(prompt("How many days will you be renting Brother Breas for?"));
var DaysH =  Number(prompt("How many days will you be renting Hurcules for?"));
var total = Number(alert("Your total will be " + (DaysLM * 3 + DaysBB * 3 + DaysH * 3)))

var Google = Number(prompt("How hours did you work ar google this week?"))
var Amazon = Number(prompt("How hours did you work ar Amazon this week?"))
var Facebook = Number(prompt("How hours did you work ar Facebook this week?"))
var total = Number(alert("Your paycheck will be " + (Google * 400 + Amazon * 380 + Facebook * 350)))

// part 3

var full = confirm("Is the class full?");

var schedule = confirm("Does the class conflict with your current schedule?");

if(full == true || schedule == true) {
    alert("you may not enroll in the class.");
}
else {
    alert("you may enroll in the class.");
}

// part 4

var Offer = confirm("Is your offer valid?");
var Items = confirm("do you have more than two items?");
var Premium = confirm("Are you a premium member");
var valid = alert(Offer && (Items || Premium))




