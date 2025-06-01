let unit ={}

unit.name = "saif";
unit.age = 20;

console.log(unit);

for (x in unit){
    console.log(x,unit[x]);
}

let arr1 = [1,2,3,4,5];
for (let value of arr1){
    console.log(value);
}

var username = "saif";
var password = "123";
if(username === "saif" && password === "123"){
    console.log("Correct");
}
else{
    console.log("Incorrect")
}
let userdetail = {
    username: "saif",
    password: "123"
    
};
let enterusername = prompt("Enter username");
let enterpassword = prompt("Enter password");

if(enterusername === userdetail.username && enterpassword === userdetail.password){
    console.log("Correct password");
}else{
    console.log("Incorrect password");
}