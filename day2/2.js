//first way to call
let person = {
    Pname: function() {
        console.log(this.name + ","+this.age+","+this.Cohort+","+this.City);
        return this.age;
    }
}
let aa = {
    name : "SaIF",
    age : 20,
    Cohort : "Elon Musk",
    City: "Mumbai"
};
person.Pname.call(aa);
person.Pname.apply(aa); 

//Second way to call
let person2 = {
    Pname: function() {
        console.log(this.name + ","+this.age+","+this.Cohort+","+this.City);
        return this.age;
    }
}
let aa2 = {
    name : "SaIF",
    age : 20,
    Cohort : "Elon Musk",
    City: "mumbai"
};
//ss


console.log("Hello");
let proto={func:function(){console.log (this.name + " " + this.age);return this.age;}};
let obj1={name:"John", age:19, city:"New York"};

proto.func.call(obj1);
proto.func.apply(obj1);

let arr=[1,2,3,4,5,6,7,8,9,0];
let iter = arr[Symbol.iterator]();

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

function func1(){
    console.log("Hello!!!")
}


//to create pattern
function pattern(n){
    for(let i=1; i<=n; i++){
        let str = "";
        for(let j=1; j<=i; j++){
            str += "*";
        }

//jenej
//           
for(let i = 1; i<=6;i++){
    let row = "";
    for(let j = 1; j<=i;j++){
        row += "*";
    }
    console.log(row);
}