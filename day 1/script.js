function msg() {
    alert("Welcome to the JavaScript world!");
}

let x = 5;
let y = 10e40;
let z = "Hello";
let isStudent = true;
let hobbies = ["reading", "writing", "coding"];
console.log(hobbies);

let func = function () {
    return "Hello World!";
};
let obj = {
    name: "saif",
    age: 20,
};
console.log(obj);

let nullValue = null;
let undefinedValue;
let symbolValue = Symbol("T");
let bigIntValue = BigInt("1234567890123456789012345678901234567890");
let date = new Date().getFullYear();
console.log(date);

let demo = `The sum of numbers is ${3 + 5}`;
console.log(demo);

let a = 10;
let b = 5;
console.log("Is a equal to 10 or b equal to 5?", a === 10 || b === 5);

let x_ = 5,
    y_ = "5";
console.log(x_ === y_); // false (strict comparison)
console.log(x_ !== y_); // true
console.log(x_ == y_);  // true (loose comparison)

// ✅ CONDITIONAL STATEMENTS (executed)
if (isStudent) {
    console.log("The user is a student.");
}

if (hobbies.includes("coding")) {
    console.log("User enjoys coding!");
}

if (typeof bigIntValue === "bigint") {
    console.log("bigIntValue is a BigInt type.");
}
function showTime() {
    const now = new Date();

    document.getElementById("hours").textContent = now.getHours();
    document.getElementById("minutes").textContent = now.getMinutes();
    document.getElementById("seconds").textContent = now.getSeconds();
}
