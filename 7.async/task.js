class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }
  addClock(startAlarm, callback) {    
    if (!startAlarm || !callback) {
      throw new Error("Отсутствуют обязательные аргументы");
    }    
    if (this.alarmCollection.some(alarm => alarm === {startAlarm})) {
      console.warn('Уже присутствует звонок на это же время');
    } 
    this.alarmCollection.push({time : startAlarm, callback, canCall : true});
  }
  removeClock(time) {    
    this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
  }
  getCurrentFormattedTime() {
    return new Date().toLocaleTimeString("ru-Ru", {
      hour: "2-digit",
      minute: "2-digit",
    });    
  }
  start() {
    if (this.intervalId > null) {
      return;
    }
    this.intervalId = setInterval(this.alarmCollection.forEach((alarm) => {
      if (alarm === true && alarm === this.getCurrentFormattedTime()) {
        alarm.canCall = false;
        callback(alarm);
      }
    }), 1000);
  }
  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }
  resetAllCalls() {
    this.alarmCollection.forEach(reset => reset.canCall = true);
  }
  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}