class EventEmitter {
  constructor() {
    this.eventMap = {};
  }
  on(name, callback) {
    const events = this.eventMap[name];
    if (events) {
      events.push(callback);
    } else {
      this.eventMap[name] = [callback];
    }
  }
  emit(name, key) {
    const events = this.eventMap[name];
    if (events) {
      events.forEach(callback => {
        callback(key)
      });
    }
  }
}
const event1 = new EventEmitter();
event1.on('name1', (name) => {
  console.log(name)
});
event1.on('name1', (num) => {
  const s = num + 1
  console.log(s)
});
event1.emit('name1', 1)