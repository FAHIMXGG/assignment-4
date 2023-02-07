function mindGame(num) {
    return (num * 3 + 10) /2-5;
}
var game = mindGame(33);
console.log(game);
///////////////// problems 2--done
function evenOdd(string){
    if (string.length % 2 === 0 ) {
        console.log('number is even');
    }
    else{
        console.log('Number is odd');
    }
}
evenOdd('Batch7');
/////////////////////////////////// 4----------done
function findingBadData(array) {
    let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      count++;
    }
  }
  return count;
}


var test4 = findingBadData([ -4, -9, -5, -33, -55 ])
console.log(test4);
///////////////////////////////
// function isLGSeven(num){
//     const difference = Math.abs(num - 7);
//     return difference < 7 ? difference : 2 * difference;
//   }


// var t3=  isLGSeven (13)
// console.log(t3);