function sumOfTwoSmallestNums(arr) {
  for (i = 0; i < 4; i++) {
    let sortArr = arr.sort((a, b) => a - b);
    return sortArr[0] + sortArr[1];
  }
}

module.exports = sumOfTwoSmallestNums;
