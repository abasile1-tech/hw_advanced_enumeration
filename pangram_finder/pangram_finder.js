class PangramFinder {
  constructor(phrase) {
    this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
    this.phrase = phrase.toLowerCase();
  }

  isPangram() {
    return this.alphabet.every((letter) => {
      return this.phrase.includes(letter);
    });
  }
}


module.exports = PangramFinder;
