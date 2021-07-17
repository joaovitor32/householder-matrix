const transpose = matrix =>
  matrix[0].map((_, index) => matrix.map(row => row[index]));

export default transpose;
