//Factory Method

function employee(nm,dept,sal){
    
    return {
        empName:nm,
        empSalary:sal,
        empDept:dept,
        
        empInfo: function(){
            return this.empName +"works in dept" +this.empDept;
        }
    }
}

var emp=employee("Ali","SD",5000);
console.log(emp.empName);//Ali
console.log(emp.empDept);//SD
console.log(emp.empInfo());//Ali works in dept SD

var newEmp=employee("Nour","SA",2500);

//Constructor Method
function Employee(name,dept,sal){
    this.empName=name;
    this.empDept=dept;
    this.Salary=sal;
}

var me=new Employee("Mona", "MD", 5000);
console.log(me);
console.log(me.empDept);
console.log(me["empName"]);


//Instant Methods
console.log(me["empName"]);

console.log(me.hasOwnProperty("empName"))
console.log(me.hasOwnProperty("empname"))
console.log(me.toString());

//Static Methods
console.log(Object.keys(me));
console.log(Object.values(me));

delete me.empName;

console.log(me.empName);

for(var i in me){
    console.log(i+":"+me[i]);
}
