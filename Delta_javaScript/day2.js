// console.log() 

// linking js file 
// {/* <script src="app.js"></script> */}

// console.log("hello world!");
// let a = 10;
// let b = 234;
// console.log(a+b);

// template literals:(used to add embedded expressions in a string)

let pencilPrice = 10;
let eraserPrice = 134;
// let output = "The total price is : " + (pencilPrice + eraserPrice) + " Rupees. ";
// console.log(output);

// `` back ticks (template literals)
// console.log(`The total price is : ${pencilPrice + eraserPrice} Rupees`);

// Operators in JS:
// Arithmetic(+,-,*,%,**)
// inc/dec operators(++,--)
// Assignment(=,+=,-=,*=,/=,%= etc.)
// Comparison(>,>=,==,!=)
// comparison for non-numbers: 'a' > 'A' (unicode)
// Logical(&& ||)

// Conditional statements: if-else/nested if-else/ switch 

// IF STATEMENT:
// // some code before if
//     if (some condition) {
//         //  DO SOMETHING
//     } 
// // some code after if   

// console.log("before my if statement");
// let age = 15;
// if (age >= 18) {
//     console.log("you can vote");
// }
// if (age < 18) {
//     console.log ("you are dumb");
// }
// console.log("after my if statement");

// let firstName = ("Yogesh");
//     if (firstName == "Yogesh") {
//         console.log(`Welcome ${firstName}`);
    // }

// Practice Question
// let color = "yellow";
//     if (color === "red") {
//         console.log("stop");
//     }
//     if (color === "yellow") {
//         console.log("slow down");
//     }
//     if (color === "green") {
//         console.log("go");
//     }
        // else {
        //     console.log("traffic light is broken");
        // }

// ELSE IF STATEMENT :
// IF (CONDITION) {
//     // DO SOMETHING
// }
// ELSE IF (CONDITION2) {
//     // DO SOMETHING ELSE
// }
// ELSE IF (CONDITION3) {
//     // DO SOMETHING ELSE
// }

// ELSE STATEMENT :
// IF (CONDITION1) {
//     // DO SOMETHING
//  }
// ELSE {
//     DO SOMETHING ELSE
// }

// let y = 8;
// if (y === 4) {
//     console.log("yes go");
// }
// else {
//     console.log("okay");
// }

// let size = "XL";
// if (size === "L") {
//     console.log("Price:200")
// }
// else if (size === "XL") {
//     console.log("Price:250")
// }
// else if (size === "M") {
//     console.log("Price:100")
// }
// else if (size === "S") {
//     console.log("Price:50")
// }
// else {
//     console.log("Size not available");
// }

// Nested IF-ELSE 
// IF MARKS >= 33
//         IF MARKS >= 5O
//             PRINT"O"
//         ELSE 
//             PRINT"A"
// ELSE 
//     PRINT"BETTER LUCK NEXT TIME"       

// LOGICAL OPERATORS:(to combine expressions)
// && Logical AND   (exp1)&&(exp2) | || logical or | ! logical not
// when there are lots of logical operators they are calculated from left --> right

// // Pracitce Question 
// let str = "apple";
// if ( (str[0] === "a") &&( str.length > 3)) {
//     console.log("good string");
// }
// else {
//     console.log("not a good string");
// }

// let num = 12;
// if((num%3 ===0) && ((num+1 == 15) || (num-1 == 11))) {
//     console.log("safe");
// } else {
//     console.log("unsafe");
// }

// // truthy & falsy :
// // everything in JS is true or false( in boolean context).
// // falsy values: 
// // false,0, -0, on(bignit value), ""(empty string), null, undefined, NaN

// // truthy values: 
// // everything else

// if (3) {
//     console.log("it has true value");
// } else {
//     console.log("it has fasle value")
// }

// // Switch Statement :

// let color = "blue";

// switch(color) {
//     case "red":
//         console.log("stop");
//         break;
//     case "yellow" :
//         console.log("slow down");
//         break;
//     case "green" :
//             console.log("GO");
//             break;   
//     default :
//     console.log("Broken Light");

// }

// let day = "2";

// switch(day) {
//     case "1" :
//         console.log("Monday");
//         break;
//         case "2" :
//         console.log("Tuesday");
//         break;
//         case "3" :
//         console.log("Wednesday");
//         break;
//         case "4" :
//         console.log("Thursday");
//         break;
//         case "5" :
//         console.log("Friday");
//         break;
//         case "6" :
//         console.log("Saturday");
//         break;
//         case "7" :
//         console.log("Sunday");
//         break;
//         default :
//         console.log("Funday")
// }

// Alert & Prompt:
// Alert displays an alert message on the page
// alert("something is wrong!");

// Prompt displays a dialog box that asks user for some input .
// prompt("please enter your roll no.");

// console.error | console.warn 

// let firstName = prompt("enter your name : ");
// console.log(firstName);

// let firstName = prompt("enter first name");
// let lastName = prompt("enter last name");
// let msg = "Welcome" + " " + firstName + " " + lastName + "!" ;
// alert(msg);

// Assignment Questions:

// let num = 34;
// if (num%10 == 0) {
//     console.log("good");
// } else {
//     console.log("bad");
// }

// let name = prompt("please enter your name");
// let age = prompt("please enter your age");
// let msg = (` ${name} is ${age} years old. `);
// alert(msg);

// let quarter = 1;

// switch(quarter) {
//     case 1:
//         console.log("January,February,March");
//         break;
//         case 2 :
//             console.log("April,May,June");
//             break;
//         case 3 :
//                 console.log("July,August,September");
//                 break;
//         case 4 :
//                     console.log("October,November,December");
//                     break;   
//         default : 
//         console.log("no");                
// }

// let str = "adfljd";
// if ((str[0] == 'a' || str[0] == 'A')  &&  (str.length > 5)) {
//     console.log("golden string");
// } else {
//     console.log("bad string");
// }

// let a = 3;
// let b = 21;
// let c = 34;

// if(a>b) {
//     if(a>c) {
//         console.log(a, "is largest");
//     } else {
//         console.log(c, "is largest");
//     }
// } else {
//     if(b>c) {
//         console.log(b, "is largest");
//     } else {
//         console.log(c, "is largest");
//     }
// }

// let num1 = 32;
// let num2 = 53532;

// if ((num1%10) == (num2%10)) {
//     console.log("numbers have the same last digit which is", num1%10);
// } else {
//     console.log("numbers don't have the same last digit");
// }