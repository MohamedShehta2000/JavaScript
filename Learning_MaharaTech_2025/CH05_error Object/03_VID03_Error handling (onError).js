onerror = errorHandle;

function errorHandle(msg,url,l,col,err){
    
    console.log(msg)
    console.log(url)
    console.log(l)
    
    return false;
}

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

console.log("inside try block");

    // console.logg("catch error occured");
    console.log("catch block excuted after error caught");
}
console.log("done");