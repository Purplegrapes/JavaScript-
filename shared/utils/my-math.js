class myMath {
	constructor(value) {
		this.value = value || 0;
	}
	add() {
		return new myMath([...arguments].reduce((prev, curr) => prev + curr, this.value))
	}
	minus() {
		return new myMath([...arguments].reduce((prev, curr) => prev - curr, this.value))
  }
  getValue() {
    return this.value;
  }
}
module.exports = new myMath();
