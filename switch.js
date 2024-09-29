//Basic Switch


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


//Multiple Cases


const color = 'red';

switch (color) {
  case 'red':
  case 'green':
  case 'blue':
    console.log('Primary color');
    break;
  default:
    console.log('Secondary color');
}
// Output: "Primary color"


/// No Break


const number = 2;

switch (number) {
  case 1:
    console.log('One');
  case 2:
    console.log('Two');
  case 3:
    console.log('Three');
}
// Output: 
// Two
// Three


/// Default


const fruit = 'mango';

switch (fruit) {
  case 'apple':
    console.log('Apple');
    break;
  case 'banana':
    console.log('Banana');
    break;
  default:
    console.log('Exotic fruit');
}
// Output: "Exotic fruit"


// Switch with Functions


function getDay(day) {
  switch (day) {
    case 1:
      return 'Monday';
    case 2:
      return 'Tuesday';
    case 3:
      return 'Wednesday';
    default:
      return 'Invalid day';
  }
}

console.log(getDay(2));
// Output: "Tuesday"


// Switch with Objects


const days = {
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
};

const day = 2;

switch (day) {
  case 1:
    console.log(days[1]);
    break;
  case 2:
    console.log(days[2]);
    break;
  case 3:
    console.log(days[3]);
    break;
  default:
    console.log('Invalid day');
}
// Output: "Tuesday"