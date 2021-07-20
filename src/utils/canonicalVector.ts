const canonicalVector = (position: number, size: number): Array<number> => {
  if (position < 0 || position > size) {
    throw new Error('Incompatible position and size');
  }

  const canVector = [...new Array(size)].map((_, index: number) =>
    index === position ? 1 : 0,
  );

  return canVector;
};

export default canonicalVector;
