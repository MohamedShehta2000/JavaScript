//Creation for Object using constructor
var obj = new Object();

obj.nameprop = "javaScript";
obj.typeprop = "scripting language";

//literal creation
var myObj = {};
myObj.objectName = "custom object";
myObj.objAge = 10;
myObj.SKILLS = ["web", "programming"];

myObj.display = function () {
    return "this is a function in object";
}

var result = myObj.DISPLAY();
console.log(result);

//subscript notation
myObj["address"] = "123 st.";

var loc="location";

//myObj.location=""
//myObj["location"]=""
myObj[loc]="cairo";
//myObj.loc=""

console.log(myObj.address);
console.log(myObj.loc);//undefined
console.log(myObj.location);//"cairo"

console.log(myObj["objName"]);

var customObj = {
    name: "abc",
    age: 15,
    city: "Alex",
    info: function() {
        return "this is"+this.name+"of age"+this.age+"lives in"+this.city;
    }
}
console.log(customObj.info());//this is abc of age 15 lives in Alex