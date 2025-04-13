var name="Ali";
var age=10;
var address="abc st.";

var obj={}
Object.defineProperty(obj,"name",{
    value:name,
    configurable:true,
    enumerable:true
});

Object.defineProperty(obj,"age",{
    value:,
    writable:,
});

Object.defineProperties(obj,{
    name:{
        value:name,
        writable:false,
        configurable:true,  
    }
    age:{
        value:,
        writable,
        configurable
    }
    addr:{
        value:address,
        writable:true
    }
})

console.log(obj.addr);
obj.addr="123 st."
console.log(obj.addr);

console.log(obj.name);
obj.addr="kareem"
console.log(obj.name);