const PENDING = 'pending';
const FULLFILLED = 'fullfilled';
const REJECTED = 'rejected';

class myPromise {
  constructor(handler) {
    if (typeof handler !== 'function') {
      throw Error('myPromise params should be function')
    }
    this.status = PENDING;
    this.value = undefined;
    this.fullfilledQueues = [];
    this.rejectedQueues = [];
    handler(this.resolve.bind(this), this.reject.bind(this))
  }
  resolve(value) {
    if (this.status === PENDING) {
      this.status = FULLFILLED;
      this.value = value;
      this.fullfilledQueues.forEach(fn => fn());
    }
  }
  reject(error) {
    if (this.status === PENDING) {
      this.status = REJECTED;
      this.value = error;
    }
  }
  then(onFulfilled, onRejected) {
    const { status, value } = this;
    const _this = this;
    switch(status) {
      case FULLFILLED: 
      onFulfilled(value)
      break;
      case REJECTED: 
      onRejected(value)
      break;
      case PENDING:
        this.fullfilledQueues.push(function() {
          _this.resolve(value);
        })
        this.rejectedQueues.push(function() {
          _this.reject(value);
        })
        break;
    }
  }
}
// Error: fail
const p1 = new myPromise((resolve) => {
  setTimeout(() => {
    resolve('3');
  }, 3000)
  console.log('ee')
})
p1.then((data) => {
  console.log(data);
})