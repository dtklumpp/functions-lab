// 1. printGreeting
// Write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting.

// console.log(printGreeting("Slimer"));
// => Hello there, Slimer!

const printGreeting = function (name) {
    output = `Hello there, ${name}!`;
    return output;
}
console.log(printGreeting("Slimer"));


// 2. reverseWordOrder
// Write a function reverseWordOrder that accepts a single argument, a string. The function should return a string with the order of the words reversed. Don't worry about punctuation.

const reverseWordOrder = function (string1) {
    let array1 = string1.split(" ");
    let array2 = array1.reverse();
    let array3 = array2.join(" ");
    return array3;
}
console.log(reverseWordOrder("Ishmael me Call"));
// => "Call me Ishmael"
console.log(reverseWordOrder("I use Lâncome on my comb"));
// => "comb my on Lâncome use I"






// 3. calculate
// Write a function called calculate.

// This function should take three arguments: two numbers and a string.

// Name the parameters num1, num2, and operation.

// If if the function is called with the third argument as "add", it should return the sum of num1 and num2.

// If if the function is called with the third argument as "sub", it should return return num1 minus num2.

// Do the same thing for multiplication "mult", division "div", and exponent "exp" (where num2 is the exponent of num1).

const calculate = function (num1, num2, operation) {
    if(operation === "add"){
        return num1 + num2;
    }
    else if(operation === "sub"){
        return num1 - num2;
    }
    else if(operation === "mult"){
        return num1 * num2;
    }
    else if(operation === "div"){
        return num1 / num2;
    }
    else {return num1**num2;}
}


console.log(calculate(4, 3, "sub"));

// => 1
console.log(calculate(4, 3, "exp"));

// => 64





// 4. pandigital numbers
// Note: The following question is weird, we know. In interviews, you will absolutely be given coding challenges with "weird" questions and you'll need to be very careful when reading these types of questions to make sure you understand what you're being asked to do.

// A number of length n is 1-to-n pandigital if it makes use of all the digits 1 to n exactly once.

// The number 15234 is 1-to-n pandigital because it is 5 numbers long and includes 1, 2, 3, 4, and 5.

// The number 333 is not 1-to-n pandigital.

// The number 0 is not 1-to-n pandigital.

// The number 987654321 is 1-to-n pandigital.

// Write a function that checks if a number is 1-to-n pandigital.



/*
const isPandigital = function (num1,n) {
    let array1 = [];
    while(num1 != 0){
        let x = num1/10;
        let z = Math.floor(x)
        let y = (x - z) * 10;
        array1.push[y];
        num1 = z;
    }
    let sortedArray = array1.sort();
    let idealArray = [];
    for(let i = 1; i < n+1; i++) {
        idealArray.push(i);
    }
    return (sortedArray === idealArray);
}
isPandigital(1234)
*/




///this one does it
const isPandigital = function (num1,n) {
    let string1 = num1.toString();
    let array1 = string1.split("");
    let sortedArray = array1.sort();
    let idealArray = [];
    for(let i = 1; i < n+1; i++) {
        idealArray.push(i);
    }
    output1 = sortedArray.join();
    output2 = idealArray.join();
    output3 = (output1 === output2);
    console.log(output3);
}
isPandigital(123456,6)






// There is a very rudimentary JavaScript function for receiving user input called prompt().

// Usage:

// 	const userInput = prompt("Please enter some input");
// userInput is now whatever the user entered.

// There is another rudimentary JavaScript function for displaying text called alert(). You probably have heard of it. It takes a string as a parameter. Read about it on mdn.

// Let's revisit printGreeting.

// First get the userInput as above. Then write a function called printGreeting2 with a parameter name that returns a greeting with the argument interpolated into the greeting as before, but this time use the alert function to display the greeting to the user.


const userInput = prompt("What's your name?");

const printGreeting2 = function (name) {
    if(!name){
        return "bad input!";
    }
    output = `Hello there, ${name}!`;
    return output;
}
alert(printGreeting2(userInput));






// 6. Functions + loops: a special partnership
// Write a function that, when called ("call" = "invoke") creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space (a "white square") or a # character (representing a black square). Hence, the characters should form a chessboard.

// Calling your function should print something like this:

//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # #

// 7. Modify it to make any size grid.
// When you have a function that generates this pattern, modify it to take a parameter size. Make the function work for any size, outputting a properly formatted grid of the given width and height. If it helps you to have this set. The very first square should always be white.

// Remember to give it a nice semantic name

// This problem was adapted from one in Eloquent Javascript so hopefully you've already seen it because you've been reading Eloquent Javascript. If you haven't yet, read the first 3 chapters (this reads great on a phone, and if you take transit, this is a great thing to read on the train/bus on your way in). Homework will be assigned soon.



const printChess = function(n) {
    let boardArray = [];
    for(let i = 0; i<n; i++){
        for(let j = 0; j<n; j++){
            if((i+j)%2===0){
                boardArray.push("#");
            }
            else {
                boardArray.push(" ");
            }
            if(j === n - 1){
                boardArray.push("\n");
            }
        }
    }
    let boardString = boardArray.join("");
    console.log(boardString);
}





// 8. Variable number of arguments
// Modify calculate above so that it continues to work as specified in question 3, but also lets a user get the square root of a number by specifying only 2 parameters: the number they want the square root of as the first parameter, and "sqrt" as the second parameter.

// Click "Details" below for a hint:





const calculate2 = function (num1, num2, operation) {
    if(num2 === "sqrt") {
        return Math.sqrt(num1);
    }
    else {
        if(operation === "add"){
            return num1 + num2;
        }
        else if(operation === "sub"){
            return num1 - num2;
        }
        else if(operation === "mult"){
            return num1 * num2;
        }
        else if(operation === "div"){
            return num1 / num2;
        }
        else {return num1**num2;}
    }
}

console.log(calculate(4, 3, "sub"));
// => 1
console.log(calculate(4, 3, "exp"));
// => 64




