// literal function 
var myStr = "Welcome to JavaScript World!!";

// constructor 
var newStr = new String ("JavaScript String Object");

// String ()
var Str = String("")

console.log(typeof myStr) //string
console.log(typeof newStr) //object
console.log(typeof Str) //string

console.log(myStr.length); // 29

console.log(myStr.charAt(0)); //w
console.log(myStr.charAt(myStr.length-1)); // !

console.log(myStr.indexOf("j"));
console.og(myStr.lastIndexOf("Sc"));

console.log(myStr.substring("4,10")); //elcome

console.log(myStr.split(" ")); // (5) ['Welcome', 'to', 'Javascript','World!!']
console.log(myStr.split("")); // (32)

console.log(myStr.replace(/Sc/gi,"_")) // Welcome to Java_ript World!!