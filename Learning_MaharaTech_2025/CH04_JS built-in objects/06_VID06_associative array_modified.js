/*
 * Mohamed Shehta
 * 8/3/2025
 * Asocciative Array
 */
var associativeArray= new Array();
var x= "first value"
associativeArray["new elem"]="abc";
associativeArray["username"]="Ali";
associativeArray["user age"]="10";
associativeArray["userSkill"]=["swim","dance","read","play"];

for (i in associativeArray){
    console.log(i+":"+associativeArray[i]);
}

console.log(associativeArray["new elem"]);
