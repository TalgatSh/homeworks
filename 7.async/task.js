class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }
  addClock(startAlarm, callback) {
    this.startAlarm = startAlarm;
    this.callback = callback();
    if (!startAlarm || !callback) {
      throw new Error("Отсутствуют обязательные аргументы");
    }    
    if (this.alarmCollection.some(alarm => alarm === startAlarm)) {
      console.warn('Уже присутствует звонок на это же время');
    } 
    this.alarmCollection.push({time : startAlarm, callback, canCall : true});
  }
  removeClock(time) {    
    this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time)
  }
  getCurrentFormattedTime() {
    let currentTime = new Date().toLocaleTimeString("ru-Ru", {
      hour: "2-digit",
      minute: "2-digit",
    });
    return currentTime;
  }
  start() {
    if (this.intervalId > 0) {
      return;
    }
    this.intervalId = setInterval(this.alarmCollection.forEach(function(alarm) {
      if (alarm === alarm.canCall) {
        this.canCall = false;
        return this.callback;
      }
    }), 1000);
  }
  stop() {
    clearInterval(this.intervalId = null);
  }
  resetAllCalls() {
    this.alarmCollection.forEach(reset => reset.canCall = true);
  }
  clearAlarms() {
    stop.bind();
    this.alarmCollection = []
  }
}