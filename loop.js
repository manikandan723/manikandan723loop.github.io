//For Loop


for (let i = 0; i < 5; i++) {
  console.log(i);
}
// Output: 0, 1, 2, 3, 4


//While Loop


let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
// Output: 0, 1, 2, 3, 4


//Do-While Loop


let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
// Output: 0, 1, 2, 3, 4


//For-Of Loop (ES6+)


const fruits = ['apple', 'banana', 'cherry'];
for (const fruit of fruits) {
  console.log(fruit);
}
// Output: apple, banana, cherry


//For-In Loop


const person = { name: 'John', age: 30, occupation: 'Developer' };
for (const prop in person) {
  console.log(`${prop}: ${person[prop]}`);
}
// Output: 
// name: John
// age: 30
// occupation: Developer


//Nested Loops


for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 2; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}
// Output: 
// i: 0, j: 0
// i: 0, j: 1
// i: 1, j: 0
// i: 1, j: 1
// i: 2, j: 0
// i: 2, j: 1


// Break and Continue


for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}
// Output: 0, 1, 2

for (let i = 0; i < 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}
// Output: 0, 1, 2, 4