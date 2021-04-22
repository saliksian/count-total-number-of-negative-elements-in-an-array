let numberArray = [1,2,0.0001,-1,0,5,1,-67,100,-16754]
function checkNegative(array) {
    return array<0
}
let positiveArray = numberArray.filter(checkNegative) // here filter method return new array which contain just negative numbers

console.log(`Total negative numbers in array: ${positiveArray.length}`);