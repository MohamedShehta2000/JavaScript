/*
 * Mohamed Shehta
 * 8/3/2025
 * Array >> Methods
 */

var newArr = [1,2,3,5,10,11,7,26];
// 01. newArray.join()
console.log(newArr.join("*_*")); //1*_*2.......*_*26
console.log(newArr.join("*")); // 1*2*3..........*26
console.log(newArr.join("")); // 12351011726
console.log(typeof newArr.join("*_*"));  // string
// 02. nweArray.push()
console.log(newArr.push("new value"));
// 03. newArray.pop()
console.log(newArr.pop());
