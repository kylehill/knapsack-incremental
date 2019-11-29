const max = Math.pow(2, 31) - 1;

const Random = seed => {
  seed = seed % max;
  if (seed <= 0) {
    seed = seed + max - 1;
  }
  const obj = {
    _seed: seed % max,
    next(n) {
      this._seed = (this._seed * 16807) % max;
      const float = (this._seed - 1) / (max - 1);
      if (n !== undefined) {
        return Math.floor(float * n);
      }
      return float;
    }
  };

  // burn in randomness
  obj.next();
  return obj;
};

export default Random;
