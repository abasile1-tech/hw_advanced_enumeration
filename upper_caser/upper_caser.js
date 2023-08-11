class UpperCaser {
	constructor(words) {
		this.words = words;
	}

	toUpperCase() {
		return this.words.map((word) => {
			return word.toUpperCase();
		})
	}
}


module.exports = UpperCaser;
