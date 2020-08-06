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
    handler(this.resolve.bind(this), this.reject.bind(this))
  }
  resolve(value) {
    if (this.status === PENDING) {
      this.status = FULLFILLED;
      this.value = value;
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
    switch(status) {
      case FULLFILLED: 
      onFulfilled(value)
      break;
      case REJECTED: 
      onRejected(value)
      break;
    }
  }
}
// Error: fail
const p1 = new myPromise((resolve) => {
  resolve('3');
  console.log('ee')
})
p1.then((data) => {
  console.log(data);
})