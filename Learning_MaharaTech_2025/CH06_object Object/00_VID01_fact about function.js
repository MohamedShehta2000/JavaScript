// function statement
function fun1(a, b) {
    return a + b;
}

//assign function to variable
var myFun = function (a, b) {
    return a +b;
}
myFun(10,11);

//assign function to array element 
var arr = [1, 2, 3, "abc", function (a, b) {
    return a +b;
}, "xyz"];
var funelem = array[4];
console.log(funelem(10, 11));
console.log(arr[4](10,11;));

//return function from another function 
function newAddingFunction (x, y, z){
    return function (){
        return x + y+ z;
    }
}
var result = newAddingFunction(1,2,3);
console.log(result())