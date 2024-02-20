/*
1. Create a function named `checkNumberType` that takes a number as a parameter.

2. Use `if` to check if the number is greater than 0.
   Use `else if` to check if the number is less than 0.
   Use `else` to handle the case when the number is not greater than 0 or less than 0 
   (i.e., when it is zero).

3. Return the corresponding string value for each case.

4. Declare and initialize the variable

5. Call the function and print the result

*/


function  checkNumberType(number) {

    if (number > 0){
       console.log("the number is positive");
    } else if (number < 0){
       console.log("the number is negative");
    }else {
       console.log(" please enter a number greater or less than 0 ");
    }
 }
checkNumberType (9) 

// other way

function checkNumberType2 (number2){
    if (number2 > 2){
        return "the number you entered is greater than: 0"
    }
    else if (number2<0){
        return " the number you entered is less than: 0"
    }else {
        return "please enter a number less or greater than: 0"
    }

}
let number2 = (5)
console.log(checkNumberType2(number2))
