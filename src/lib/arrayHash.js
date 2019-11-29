const max = Math.pow(2, 31) - 1;

const arrayHash = arr => {
  return arr.reduce((mem, value, idx) => {
    if (Number.isInteger(value) === false) {
      throw new TypeError("arrayHash: all array values must be integers");
    }
    return (mem + value * Math.pow(2, idx % 32)) % max;
  }, 0);
};

export default arrayHash;
