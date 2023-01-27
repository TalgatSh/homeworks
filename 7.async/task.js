class AlarmClock {
  constructor(intervalId) {
    this.alarmCollection = [];
    intervalId = 0;
  }
  addClock(currentTime, callback) {
    this.getCurrentFormattedTime = currentTime;
    function startAction() {
      callback();
    }
    try {
      if (!currentTime || startAction) {
        throw new Error("Отсутствуют обязательные аргументы");
      }
    } catch(error) {
        return error;  
    }
    if (this.alarmCollection.includes(currentTime)) {
      console.warn('Уже присутствует звонок на это же время');
    } else {
      this.alarmCollection.push(currentTime);
    }
    this.alarmCollection = this.alarmCollection.push({"id" : null, "time" : null, "canCall" : true});
  }
  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time)
  }
}