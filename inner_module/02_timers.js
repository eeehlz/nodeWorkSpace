// inner_module/02_timers.js

const timeout = setTimeout(() => {
  let today = new Date();
  console.log(today.toLocaleTimeString());
}, 2000);

let count = 0;
const interval = setInterval(() => {
  console.log('interval %d', count++);
  if (count == 2) {
    clearInterval(interval);
  }
}, 1000)

console.log('End!');

// function showTime(){
//   let today = new Date();
//   console.log(today.toLocaleTimeString());
// }
// showTime();
// const interval = setInterval(() => {
//  showTime();
// }, 2000)

// console.log('End!');