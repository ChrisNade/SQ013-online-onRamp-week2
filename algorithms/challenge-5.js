function accum(str) {
  let letters = [];
  let acc;
  for (let i = 0; i < str.length; i++) {
    let resul = str[i].toUpperCase;
    let result = str[i].repeat(i + 1);

    letters.push(result);
  }
  return letters.join("-");
}
module.exports = accum;
