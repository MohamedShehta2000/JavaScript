var myError = new Error("custom error");
console.log(myError.name)
console.log(myError.message)

//throw myError

try {
var result = parseInt(prompt("enter value between 10 and 20","15"));

if(result<10)
    throw "less than expected";
else if(result>20)
    throw new RangeError ("out of Range");
else 
    aler1("value within accepyed Error");

console.log("inside try block");
}
catch(e){
    if (e instanceof RangeError){
        console.log("this is range error");
        console.log(e.name);
        console.log(e.message);
    }
    else if(e=="less than expected"){
        console.log("log value");
    }
    // console.logg("catch error occured");
    console.log("catch block excuted after error caught");
} finally{
///rest of code exec or not
    console.log("done");
}
console.log("after finally block");