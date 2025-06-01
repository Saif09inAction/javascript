//Functions
//Arrow Function
let f1 = () =>  console.log("Hello")
f1()

//Anonymous Function
let f2 = function(){
    console.log("Hehehe")
}
f2()

//Default Function
let oh = "HI"
function my(oh){
    return oh;
}
console.log(my(oh));

//console.log(str)
const func = () => {const g=8}
console.log(g)

//create a function that takes number as an argument and returns native of that number.return negative numbers withouth any change 
let numb = prompt("Enter a number");
function checkNegative(numb){
    if(numb == 0){
        return numb;
    }else{
        return -numb;
    }
}
console.log(checkNegative(numb));   
