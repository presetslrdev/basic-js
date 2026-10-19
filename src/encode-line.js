const { NotImplementedError } = require('../lib');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  if (typeof str !== 'string') {
    return '';
  }

  let encodedString = '';
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    count++;

    if (str[i] !== str[i + 1]) {
      encodedString += (count > 1 ? count : '') + str[i];
      count = 0;
    }
  }

  return encodedString;
}

module.exports = {
  encodeLine
};
