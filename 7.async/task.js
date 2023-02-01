class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }
  addClock(startAlarm, callback) {
    if (!startAlarm || !callback) {
      throw new Error("Отсутствуют обязательные аргументы");
    }
    if (this.alarmCollection.some(alarm => alarm.startAlarm === startAlarm)) {
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
    if (this.intervalId !== null) {
      return;
    }
    this.intervalId = setInterval(() => {
      this.alarmCollection.forEach((alarm) => {
      if (alarm.time === this.getCurrentFormattedTime() && alarm.canCall === true) {
        alarm.canCall = false;
        alarm.callback();
      }
    })}, 1000);
  }
  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }
  resetAllCalls() {
    this.alarmCollection.forEach(call => call.canCall = true);
  }
  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}