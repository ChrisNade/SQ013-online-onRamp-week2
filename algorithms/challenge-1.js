function sumOfMultiples(arr) {
  let add = [];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0 || arr[i] % 5 === 0) {
      add.push(arr[i]);
      sum += add[i];
    }
  }
  return sum;
}
module.exports = sumOfMultiples;
