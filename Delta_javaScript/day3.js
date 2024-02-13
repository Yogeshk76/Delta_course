// String Methods: methods :- actions that can be performed on objects. 

// Format
// stringName.method()

// str.trim()
// trims whitespaces from both ends of string & returns a new one.

// Strings are Immutable in JS(no changes can be made to strings.)

// str.toUpperCase()
// str.toLowerCase()

// String Methods with Arguments:
// (argument is some value that we pass to the method)

// Format 
// stringName.method(arg)

// indexOf(returns the first index of occurrence of some value in String. Or gives -1 if not found)

// let str = "IloveCoding";

// str.indexOf("love")  //1
// str.indexOf("J")  //-1 (not found)
// str.indexOf("o")  //2(only 1 index)

// let msg="   iLoveCoding   ";
// let newMsg = msg.trim().toUpperCase();

// Method Chaining
// using one method after another.Order of execution will be left to right. 
// str.toUpperCase.trim()

// Slice Method:
// returns a part of the original string as a new string 
// let str= "ILoveCoding";
// str.slice(5)                //"Coding"
// str.slice(1,4)              //"love"
// str.slice(-num) = str.slice(length-num)

// replace
// searches a value in the string & returns a new string with the value replaced.
// let str = "IloveCoding";
// str.replace("love","do")   //"IdoCoding"
// str.replace("o","x")       //"Ilxvecoding"

// repeat (returns a string with the number of copies of a string)
// let str = "Mango";

// str.repeat(3)  // "MangoMangoMango"

// Practice Qs 
// let msg = "help!";

// let name = "ApnaCollege";
// colle
// 2
// OurCollege

// Array(Data Structure):
// linear collection of things

// empty Array
// let newArr = [];
// Array.length
// array[][] for accessing the character within the array

// Arrays are mutable

// Array methods:
// Push: add to end => array.push();
// Unshift: add to start 
// Pop: delete from end & returns it 
// Shift: delete from start & returns it 

// Practice Qs 

// Array methods:
// indexOf: returns index of something 
// includes: search for a value => true/false

// concatenation & reverse:
// concat: merge 2 arrays  => primary.secondary (decides sequence too)
// reverse: reverse an array (changes the original array)

// slice: copies a portion of an array
// splice: removes/replaces/add elements in place(one in all)
// splice(start,deleteCount,item0...itemN) => changes in original array

// sort: sorts an array 
// converts values into strings and arrange according to utf-18

// Array References(address in memory) 
// new array new memory 

// Constant Arrays
// const arr = [1,2,3,4];
// it stores addrress so we can't change address which means we can't change arr completely 


// Nested Arrays : mulitdimensional arrays
// arrays of arrays 
// let nums = [[],[],[]];
// nums[][] to access the element (nums[row][column])

// Practice Qs :