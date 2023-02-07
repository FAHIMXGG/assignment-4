////////////Problem 1////////////////
// Let’s play a mind game
// Function named mindGame and with num property. As I need the total, declared the total as a const and did the maths in const value, ending the function with return total.
function mindGame(num){
    if (typeof num !== 'number') return 'input number';
    const total = (num * 3 + 10) / 2 - 5;
    return total;
}



////////////Problem 2////////////////
// Finding even or odd
// A function, "evenOdd," was created that takes in a string. The function determines if the string has an even or odd number of characters using a mathematical condition. If the length of the string divided by 2 equals zero, it's considered even because even numbers don't have remainders when divided by 2. In this case, the function returns "even". If not, it returns "odd". The function ends by providing a result based on each condition.
function evenOdd(string){
    if (typeof string !== 'string') return 'input string';
    if (string.length % 2 === 0 ) {
        return('even');
    }
    else{
        return('odd');
    }
}



////////////Problem 3////////////////
// Is Less or Greater than seven
// The function "isLGSeven" was created and takes in a value "num" as its property. A variable, "subNum," was declared and assigned the value of "num" minus 7. Then, two conditionals were implemented: if "subNum" is less than 7, the function returns "subNum," and if not, it returns "num" multiplied by 2. The function ends with a return statement in both conditions.
function isLGSeven(num){
    if (typeof num !== 'number') return 'input number';
    let subNum = num - 7;
    if(subNum < 7){
        return(subNum);
    }
    else{
        return(num * 2);
    };
    
}




////////////Problem 4////////////////
// Finding Bad data
// The "findingBadData" function was established and takes in an "array" property. A variable, "count," was declared to keep track of negative data within the array. A loop was utilized with an initial value of i = 0 and incrementing by 1 for each index in the array. The loop also includes a conditional statement to identify negative data by checking if the value is less than zero, and if so, adding it to the count. The function concludes with a return statement.
function findingBadData(array) {
    if (!Array.isArray(array)) return 'input array';
    let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      count++;
    }
  }
 
  return count;
}



////////////Problem 5////////////////
// Convert your gems into diamond
// Took a Function named gemsToDiamond and with three parameters, friend1, friend2, friend3. To determine the total number of gems, a constant named totalGems was declared to store the result of the multiplication and addition of the three parameters. A conditional statement was added to check if the totalGems is greater than 2000, if so, another constant named diamond was declared and the value of totalGems minus 2000 was assigned to it. If totalGems is less than 2000, the original value of totalGems is assigned to the constant diamond. The function ends with a return statement in both conditions.
function gemsToDiamond (friend1, friend2, friend3){
    if (typeof friend1 !== 'number' || typeof friend2 !== 'number' || typeof friend3 !== 'number') return 'input all valid number';
    const totalGems = friend1 * 21 + friend2 * 32 + friend3 * 43;
    
    if(totalGems > 2000){
        const diamond = totalGems - 2000;
        return(diamond);
    }
    else{
        const diamond = totalGems;
        return(diamond);
    }
}

