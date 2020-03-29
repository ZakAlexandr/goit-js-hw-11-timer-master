
class CountdownTimer {
    constructor ({selector, targetDate}) {
        this.selector = selector;
        this.date = targetDate;

        this.valueDay = document.querySelector(`span[data-value='days']`)
        this.valueHour = document.querySelector(`span[data-value='hours']`)
        this.valueMin = document.querySelector(`span[data-value='mins']`)
        this.valueSec = document.querySelector(`span[data-value='secs']`)
    }
    renderTargetDate = () => {
        this.time = this.date - new Date();
        this.days = Math.floor(this.time / (1000 * 60 * 60 * 24))
        this.hours = Math.floor((this.time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        this.minutes = Math.floor((this.time % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((this.time % (1000 * 60)) / 1000);
        this.valueDay.textContent = this.days < 10 ? `0${this.days}` : this.days;
        this.valueHour.textContent = this.hours < 10 ? `0${this.hours}` : this.hours;
        this.valueMin.textContent = this.minutes < 10 ? `0${this.minutes}` : this.minutes;
        this.valueSec.textContent = this.seconds < 10 ? `0${this.seconds}` : this.seconds;
    }
    start = () => {
        this.timerId = setInterval(this.renderTargetDate, 500);
    }
    init = () => {
        this.renderTargetDate()
        this.start()
    }
}

const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 17, 2020'),
  });

timer.init()