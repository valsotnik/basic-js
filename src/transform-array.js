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
  if (!Array.isArray(arr)) {
		throw new Error(`'arr' parameter must be an instance of the Array!`);
	}
  const resultArray = Array.from(arr);
  resultArray.forEach((element, i) => {
    if (element === '--discard-next') {
      resultArray[i] = `delete this element`;
      resultArray[i + 1] = `delete this element`;
    }
    if (element === '--discard-prev') {
      resultArray[i] = `delete this element`;
      resultArray[i - 1] = `delete this element`;
    }
    if (element === '--double-next') resultArray[i] = resultArray[i + 1];

    if (element === '--double-prev') resultArray[i] = resultArray[i - 1];
  });
  return resultArray.filter(element => element !== `delete this element` && element !== undefined) ;
}

module.exports = {
  transform
};
