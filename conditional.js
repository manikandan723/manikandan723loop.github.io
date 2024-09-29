//If-Else Statement


const age = 25;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}
// Output: "You are an adult."


// Switch Statement


const day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}
// Output: "Wednesday"


// Ternary Operator


const score = 80;

const result = score >= 70 ? "Pass" : "Fail";
console.log(result);
// Output: "Pass"


// Logical Operators


const isLoggedIn = true;
const isAdmin = false;

if (isLoggedIn && isAdmin) {
  console.log("Welcome, Admin!");
} else if (isLoggedIn) {
  console.log("Welcome, User!");
} else {
  console.log("Please log in.");
}
// Output: "Welcome, User!"


// Nested If-Else


const hour = 12;

if (hour < 12) {
  console.log("Morning");
} else if (hour === 12) {
  console.log("Noon");
} else if (hour < 18) {
  console.log("Afternoon");
} else {
  console.log("Evening");
}
// Output: "Afternoon"


// Conditional Expression


const name = "John";
const greeting = name ? `Hello, ${name}!` : "Hello!";
console.log(greeting);
// Output: "Hello, John!"