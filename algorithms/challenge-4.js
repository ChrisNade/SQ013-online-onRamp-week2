function squareDigit(str) {
   let sum = [];
  for (let i = 0; i < str.length; i++) {
    let power = str[i] ** 2;
    // n+= power;
    sum.push(power);
  }
  let summ = sum.join("");
  return summ
}

module.exports = squareDigit;
