//Simple If-Else


const age = 25;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}
// Output: "You are an adult."


//If-Else If-Else


const score = 80;

if (score >= 90) {
  console.log("Excellent!");
} else if (score >= 70) {
  console.log("Good job!");
} else {
  console.log("Keep trying!");
}
// Output: "Good job!"


//Nested If-Else


const hour = 12;

if (hour < 12) {
  if (hour === 0) {
    console.log("Midnight");
  } else {
    console.log("Morning");
  }
} else if (hour === 12) {
  console.log("Noon");
} else {
  console.log("Afternoon");
}
// Output: "Noon"


//Ternary Operator


const score = 80;
const result = score >= 70 ? "Pass" : "Fail";
console.log(result);
// Output: "Pass"


//Multiple Conditions


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


// If-Else with Functions


function checkAge(age) {
  if (age >= 18) {
    return "Adult";
  } else {
    return "Minor";
  }
}

console.log(checkAge(25));
// Output: "Adult"
