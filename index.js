class CountdownTimer {
  constructor({selector, targetDate}) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.refs = this.getRefs()
  }   

  start() {

    setInterval(() => {
      const currentTime = Date.now();
      const countDown = this.targetDate - currentTime
      this.updateClockface(countDown)
      }, 1000)  
    }; 
    
  getRefs () {
      const selector = document.querySelector(this.selector);
      const countDays = selector.querySelector('span[data-value="days"]');
      const countHours = selector.querySelector('span[data-value="hours"]');
      const countMins = selector.querySelector('span[data-value="mins"]');
      const countSecs = selector.querySelector('span[data-value="secs"]');
      return {countDays, countHours, countMins, countSecs}
    };

  updateClockface (time) {
      const {countDays, countHours, countMins, countSecs} = this.refs;
      countDays.textContent = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
      countHours.textContent = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      countMins.textContent = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
      countSecs.textContent = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    };

  pad (value) {
      return String(value).padStart(2, '0');
    };
  }; 


const newYear = new CountdownTimer ({
    selector: '#timer-1',
    targetDate: new Date('Jan 1, 2021'),
})    
    newYear.start()
    console.log(newYear);


const tomorrow = new CountdownTimer ({
    selector: '#timer-2',
    targetDate: new Date('Oct 29, 2020'),
  })  
    tomorrow.start()
    console.log(tomorrow);



 
