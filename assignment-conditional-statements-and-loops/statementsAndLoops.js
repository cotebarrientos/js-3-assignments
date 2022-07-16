/* 
CONDITIONAL STATEMENTS AND LOOPS
ASSIGNMENT INSTRUCTIONS:

1. Write a JavaScript program that accepts two integers and displays the larger of the two.

2. Write a JavaScript program that checks whether an integer is an even or an odd number.
*/

function numberComparison() {

    let number1 = document.getElementById("firstNumber").value;
    let number2 = document.getElementById("secondNumber").value;
    let largerNumber = Math.max(number1, number2);

    if(number1 === number2){
        largerNumber = "These numbers are the same!!";
    } else {
        largerNumber;
    }
    
    return document.getElementById("yourNumberComparison")
            .innerHTML =`The largest number between ${number1} and ${number2} is: ${largerNumber}`
}

numberComparison();

function isEvenOrOdd() {

    let numberChecked;
    const number = document.getElementById("evenOrOdd").value;

    if(number%2 == 0){
        numberChecked = `${number} is an even.`;
    } else {
        numberChecked = `${number} is an odd.`;
    }

    return document.getElementById("yourAnswer").innerHTML = `${numberChecked}`
}

isEvenOrOdd();