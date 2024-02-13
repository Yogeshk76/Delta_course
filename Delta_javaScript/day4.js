// FOR LOOPS : for(initialisation;condition;updation) {
    //do something
// }
//     for (let i=1; i<=5; i++) {
//         console.log(i);
//     } DRY RUN               forward/backward 

// Infinite Loops

// To print a table
// let n = prompt("write your number");
// n = parseInt(n);
// for (let i=n; i<=n*10; i=i+n) {
//     console.log(i);
// }

// Nested for loop
// for (let i=1;i<=3;i++) {
//     for (let j=1;j<=3;j++) {
//         console.log(j);
//     }
// }

// while loop : 
// while(condition) {
//     // do something
// } 

// while loop is generally prefered to use in the case where numbers are not highly involved & in things like updating a no we use for etc

// let i=5;


// while (i>=1) {
//     console.log(i);
//     i--;
// }

// Favorite Movie Activity

// break keyword 
// generally we use it with while loop


// Loops with Arrays :
// let fruits = ["mango","apple","banana","orange","litchi"];
// for (let i=0; i<fruits.length; i++) {
//     console.log(i, fruits[i]);
// } 


// Nested Loops with Nested Arrays
// let heroes = [["ironman","spiderman","thor"],["superman","wonder woman","flash"]];
// for(let i=0; i<heroes.length; i++) {
//     console.log(`List #${i}`);
//     for(let j = 0; j<heroes[i].length; j++) {
//         console.log(hereoes[i][j]);
//     }
// }

// let heroes = [["samosa","burger","pizza"],["roti","sabji","doodh"]]

// for (let i=0; i<heroes.length; i++ ) {
//     console.log(i,heroes[i],heroes[i].length);
//     for (let j=0; j<heroes[i].length; j++) {
//         console.log(`j=${j},${heroes[i][j]}`);
//     }
// }

// for of loop : for(element of collection) {
//     // do something
// } 
// let fruits = ["mango","apple","banana","litchi","orange"];
// for(fruit of fruits) {
//     console.log(fruit);
// }

// let dogs = [["sheru","gogo","tommy"],['a','b','c']];

// for(list of dogs) {
//     for (name of list) {
//         console.log(name);
//     } 
// }

// Todo App :
// . list - to show all todos 
// . add - to add a todo 
// . delete - to delete a task 
// . quit - to exit the todo 

// let todo = [];

// let req = prompt("please enter your request"); 
// console.log(req);

// while(true) {
//     if(req == "quit") {
//         console.log("Bas , Nikal gayi hawa ?");
//         break;
//     }

//     if(req == "list") {
//         console.log("____________");
//         for(let i=0; i<todo.length; i++){
//             console.log(i, todo[i]);
//         }
//         console.log("_____________")
//     } else if (req == "add") {
//         let task = prompt("kya ??? !!");
//         todo.push(task);
//         console.log("hogaya add, aur kuch ?");
//     } else if (req == "delete") {
//         let idx = prompt("konse index wale kaam ka cut maar raha hai ?");
//         todo.splice(idx, 1);
//         console.log("kar diya delete");

//     }else {
//         console.log("kyun nahi m to genie hu na, options dekh k bol")
//     }
//     req = prompt("please enter your request"); 
// }

// let arr = [2,3,5,5,7,8,9];
// let num = prompt("please enter your number you want to delete");
//     arr = arr.filter((element) => element !== parseInt(num));
// console.log(arr);


// function countDigits(number) {
//     return number.toString().length;
// }

// const number = 32432;
// const count = countDigits(number);
// console.log("Number of digits:", count);



// function countDigitsSum(number) {
//     let sum = 0;
//     let copy = number;

//     while (copy>0) {
//         sum += copy%10;
//         copy = Math.floor(copy/10);
//     }
// }

// const number = 34234;
// const sum = countDigitsSum(number);
// console.log("The sum of digits:", sum);


// function factorial(number) {
//         if (number === 0 || number === 1) {
//             return 1;
//         } 
//         else {
//             return number * factorial(number -1)
//         }
        
// } 

// const number = 10;
// const fact = factorial(number);
// console.log("The factorial of :" ,number, "is", fact);

// let arr=[2,5,10,4,2,7,1,9];
// let largest=0;
// for(let i=0;i<=arr.length;i++){
//     if(largest<arr[i]){
//         largest=arr[i];
//     }
// }
// console.log(largest); ?? ?? ?? ?? ?? ?? ?? ??