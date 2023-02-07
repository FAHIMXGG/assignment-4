////////////Problem 1////////////////
function mindGame(num){
    if (typeof num !== 'number') return 'input number';
    const total = (num * 3 + 10) / 2 - 5;
    return total;
}
mindGame(5);
//console.log(mindGame(5))

////////////Problem 2////////////////
function evenOdd(string){
    if (typeof string !== 'string') return 'input string';
    if (string.length % 2 === 0 ) {
        return('even');
    }
    else{
        return('odd');
    }
}
evenOdd('Batch7');
//console.log(evenOdd('Batch7'));

////////////Problem 3////////////////
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

isLGSeven(6);
//console.log(isLGSeven(6));

////////////Problem 4////////////////
function findingBadData(array) {
    if (!Array.isArray(array)) return 'input array';
    let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      count++;
    }
  }
  //console.log(count);
  return count;
}
findingBadData([ -4, -9, -5, -33, -55 ])
//console.log(findingBadData([ -4, -9, -5, -33, -55 ]));

////////////Problem 5////////////////
function gemsToDiamond (friend1, friend2, friend3){
    if (typeof friend1 !== 'number' || typeof friend2 !== 'number' || typeof friend3 !== 'number') return 'input valid number';
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
gemsToDiamond(20, 200, 50);
//console.log(gemsToDiamond(20, 200, 50));