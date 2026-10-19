const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect !== false;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }

    const upperMessage = message.toUpperCase();
    const upperKey = key.toUpperCase();
    const result = [];
    let keyIndex = 0;

    for (let i = 0; i < upperMessage.length; i++) {
      const char = upperMessage[i];
      if (char >= 'A' && char <= 'Z') {
        const mCode = char.charCodeAt(0) - 65;
        const kCode = upperKey.charCodeAt(keyIndex % upperKey.length) - 65;
        result.push(String.fromCharCode(((mCode + kCode) % 26) + 65));
        keyIndex++;
      } else {
        result.push(char);
      }
    }

    return this.isDirect ? result.join('') : result.reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }

    const upperMessage = encryptedMessage.toUpperCase();
    const upperKey = key.toUpperCase();
    const result = [];
    let keyIndex = 0;

    for (let i = 0; i < upperMessage.length; i++) {
      const char = upperMessage[i];
      if (char >= 'A' && char <= 'Z') {
        const cCode = char.charCodeAt(0) - 65;
        const kCode = upperKey.charCodeAt(keyIndex % upperKey.length) - 65;
        result.push(String.fromCharCode(((cCode - kCode + 26) % 26) + 65));
        keyIndex++;
      } else {
        result.push(char);
      }
    }

    return this.isDirect ? result.join('') : result.reverse().join('');
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
