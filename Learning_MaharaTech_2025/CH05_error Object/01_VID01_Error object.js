var myError = new Error("custom error");
console.log(myError.name)
console.log(myError.message)

//throw myError

var result = parseInt(prompt("enter value between 10 and 20","15"));

if(result<10)
    throw "less than expected";
else if(result>20)
    throw new RangeError ("out of Range");
else 
    aler1("value within accepyed Error");