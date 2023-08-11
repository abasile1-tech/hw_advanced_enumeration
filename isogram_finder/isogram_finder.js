class IsogramFinder {
	constructor(word) {
		this.word = word.toLowerCase().split('');
	}

	isIsogram() {
		return this.word.every((letter) => {
			return this.isUnique(letter);
		});
	}

	isUnique(letter) {
		return this.word.indexOf(letter) === this.word.lastIndexOf(letter);
	}
}


module.exports = IsogramFinder;
