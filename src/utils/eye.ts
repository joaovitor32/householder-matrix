const eye = (cols: number): number[][] => {
  const arrayObj = [...new Array(cols)];
  const eyeMatrix = arrayObj.map((_, row) =>
    arrayObj.map((_, column) => (row === column ? 1 : 0)),
  );
  return eyeMatrix;
};

export default eye;
