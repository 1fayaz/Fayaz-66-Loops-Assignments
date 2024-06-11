// //01 using FOR Loop
// let myWork: { name: string, status: boolean }[] = [];
// for (let i = 1; i <= 10; i++) {
//     let lesson = {
//         name: `Lesson ${i}`,  
//         status: (i % 2 === 1) ? true : false  
//     };
//     myWork.push(lesson);
// }
// console.log(myWork);
//02 using WHILE Loop
// const maxValue: number = 90;
// const randomNumber: number = Math.floor(Math.random() * maxValue) + 1;
// console.log(`Generated Random Number (for development purposes): ${randomNumber}`);
// let isCorrectGuess: boolean = false;
// const guesses: number[] = [10, 20, 30, 40, 50, 60, 70, 80, 90]; 
// let i: number = 9;
// while (!isCorrectGuess && i < guesses.length) {
//     const currentGuess: number = guesses[i];
//     console.log(`Your Guess: ${currentGuess}`);
//     if (currentGuess === randomNumber) {
//         console.log("Good! You've guessed the number!");
//         isCorrectGuess = true;
//     } else if (currentGuess < randomNumber) {
//         console.log("Your guess is too low.");
//     } else {
//         console.log("Your guess is too high.");
//     }
//     i++;
// }
// if (!isCorrectGuess) {
//     console.log("You've used all your guesses. Better luck next time!");
// }
// 03 DO WHILE Loop
// let counter: number = 0;
// const step: number = 6; 
// do {
//     console.log(`Counter: ${counter}`);
//     counter += step;
// } while (counter < 100); 
// console.log(`Final Counter: ${counter}`);
// 04 FOR....IN Loop
// const myObj = {
//    item1: "Value 1",
//    item2: "Value 2",
//    item3: "Value 3"
// };
// for (const property in myObj) {
//    if (myObj.hasOwnProperty(property)) { 
//        console.log(`Property: ${property}, Value: ${myObj[property]}`);
//    }
// }
//05  FOR....OF Loop
var myArray = [];
for (var i = 1; i <= 10; i++) {
    myArray.push(i);
}
console.log("Array contents:", myArray);
for (var i = 0; i < myArray.length; i++) {
    console.log("Index: ".concat(i, ", Value: ").concat(myArray[i]));
}
for (var _i = 0, myArray_1 = myArray; _i < myArray_1.length; _i++) {
    var value = myArray_1[_i];
    console.log("Value: ".concat(value));
}
