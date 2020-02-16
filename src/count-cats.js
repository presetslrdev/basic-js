module.exports = function countCats(matrix) {
  return matrix.flat().filter(el => el === "^^").length;
};
