const transpose = matrix => matrix[0].map((x, i) => matrix.map(y => y[i]));

export default transpose;
