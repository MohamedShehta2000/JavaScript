// literal notation 
var myArr = [1,2,"abc",,,90,[50,"mno",false],"xyz"];

console.log(myArr[0]); //1
console.log(myArr); // [1,2,"abc",,,90,[50,"mno",false],"xyz"]
console.log(myArr[4]); // undefined
console.log(myArr.length); // 9 
console.log(myArr[7]); // [50,"mno",false]
console.log(myArr[7][0]); //55
console.log(myArr[7] [4]); // undefined
console.log(myArr[7].length); //3

myArr[7] [8] = 222;
console.log(myArr[7].length); // 9 
console.log(myArr[7]); // [50,"mno",false,empty * 5,222]
console.log(myArr.length); // 9 

myArr[99] = "new value added";
console.log(myArr.length); // 100

// constructor 
var colorArray = new Array ();
colorArray[0] = "red";
colorArray[1] = "blue";
colorArray[2] = "green";

var colorArray = new Array ("red", "blue" , "green");



