const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {    
  // throw new NotImplementedError('Not implemented');
	if (Array.isArray(arr) !== true || arr === []) return "'arr' parameter must be an instance of the Array!"
	let result = [];
  for (let i = 0; i < arr.length; i++) {
		if (typeof arr[i] === 'number') result.push(arr[i]); 
		if (arr[i] === '--double-next') {
			if (typeof (arr[i + 1] !== 'undefined')) {
				result.push(arr[i + 1])
			}
		}
		if (arr[i] === '--double-prev') {
			if (typeof (arr[i - 1] !== 'undefined' && arr[i - 2] !== '--discard-next')) {
				result.push(arr[i - 1])
			}
		}
		if (arr[i] === '--discard-next')  i++ ;
		if (arr[i] === '--discard-prev') {
			if (typeof result[result.length - 1] !== 'undefined' && arr[i - 2] !== '--discard-next') {
				result.splice(result.length - 1, 1)
			}
		}  

	}
	return result === [] ? arr : result
}

module.exports = {
  transform
};
