/*
 * Mohamed Shehta
 * 8/3/2025
 * Array >> Methods
 */

// 1. newArray.join()

var newArr = [1,2,3,5,10,11,7,26];

console.log(newArr.join("*_*")); //1*_*2.......*_*26
console.log(newArr.join("*")); // 1*2*3..........*26
console.log(newArr.join("")); // 12351011726
console.log(typeof newArr.join("*_*"));  // string