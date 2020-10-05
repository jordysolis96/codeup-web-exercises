"use strict"
//ForLoopsExercises
//2
function showMultiplicationTable(input){
    for (var x = 1; x <= 10; x++){
        console.log((input + '*' + x + '=' + (input * x)))
    }
}
showMultiplicationTable(1);
showMultiplicationTable(2);
showMultiplicationTable(3);
showMultiplicationTable(4);
showMultiplicationTable(5);
showMultiplicationTable(6);
showMultiplicationTable(7);
showMultiplicationTable(8);
showMultiplicationTable(9);
showMultiplicationTable(10);

//3
//runs 10 times
//says whether number is odd or even

for(var i = 0; i < 10; i++){
    var randomNumber = Math.floor(Math.random() * 180) + 20;
    if(randomNumber % 2 === 0){
        console.log(randomNumber + " is even");
    }else{
        console.log(randomNumber + " is odd");
    }
}
//4

//solution 1
for(var outer = 1; outer <+ 9; outer++){
    var output = '';
    for(var inner = 1; inner <= outer; inner++){
    output += (outer);
    }
    console.log(output);
}
//solution 2

for(var i = 1; i <= 9; i++){
    console.log(i.toString().repeat(i));
}
//5
for (i = 100; i >= 5; i -=5){
    console.log(i)
}
//solution 2
// for ( i = 100; i >= 5; i --){
//     if (i % 5 === 0){
//         console.log(i);
//     }
// }