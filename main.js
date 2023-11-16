// The scope of `random` is too loose 

let getRandEvent = () => {
    const random = Math.floor(Math.random() * 3);
    if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};


// The scope of `days` is too tight 
let getTrainingDays = event => {
    let days = "";
  if (event === 'Marathon') {
    days = 50;
  } else if (event === 'Triathlon') {
    days = 100;
  } else if (event === 'Pentathlon') {
    days = 200;
  }

  return days;
};

let name = 'Nala';
// The scope of `name` is too tight 
let logEvent = event => {
let name = 'Nala';
  console.log(`${name}'s event is: ${event}`);
};

let logTime = days => {
  console.log(`${name}'s time to train is: ${days} days`);
};


const event = getRandEvent();
const days = getTrainingDays(event);
// Define a `name` variable. Use it as an argument after updating logEvent and logTime 


logEvent(event);
logTime(days);
