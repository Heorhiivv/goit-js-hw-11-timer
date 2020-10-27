const countDays = document.querySelector('span[data-value="days"]');
const countHours = document.querySelector('span[data-value="hours"]');
const countMins = document.querySelector('span[data-value="mins"]');
const countSecs = document.querySelector('span[data-value="secs"]');
const timerId = document.querySelector('.timer');

timerId.insertAdjacentHTML('beforebegin',`<h1 style = "color: red" >Santa Claus Is Coming To Town In...</h1>`)

// ...................................
//  НЕ ПОНЯЛ ЧТО С ЭТИМ ДЕЛАТЬ!

// class CountdownTimer {
//   constructor({selector, targetDate}) {
//     this.selector = selector;
//     this.targetDate = targetDate;
//   }
// }
// ...................................

const timer = ({
  selector: '#timer-1',
  targetDate: new Date('Jan 1, 2021'),
  
  start() {
    setInterval(() => {
      const currentTime = Date.now();
      const countDown = this.targetDate - currentTime
      updateClockface(countDown)
    }, 1000);
  },  
});
timer.start();

function updateClockface(time) {

  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const minutes = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const seconds = pad(Math.floor((time % (1000 * 60)) / 1000));
 
  countDays.textContent = `${days}:`;
  countHours.textContent = `${hours}:`;
  countMins.textContent = `${minutes}:`;
  countSecs.textContent = `${seconds}`;
  }
  
  function pad(value) {
    return String(value).padStart(2, '0');
  };
