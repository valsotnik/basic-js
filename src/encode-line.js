const { NotImplementedError } = require('../extensions/index.js');

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
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

	let result = '';

	for (let i = 0; i < str.split('').length; i++) {
		let counter = 1;
		let data = str[i];

		while (data === str[i +1]) {
			counter++;
			i++;
		}

		if (counter > 1) {
			result += counter + data;
		} else {
			result += data;
		}
		
	}
	return result

}

module.exports = {
  encodeLine
};
