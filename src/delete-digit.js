const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

	let array = String(n).split('');
	let max = 0;

	for (let i = 0; i < array.length; i++) {
		let current = [...array];
		current.splice(i,1);
		if (+current.join('') > max) {
			max = +current.join('');
		}
	}
	return max

}

module.exports = {
  deleteDigit
};
