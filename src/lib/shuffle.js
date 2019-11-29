import prng from "./prng";
import arrayHash from "./arrayHash";

const shuffle = (arr, offset = 0) => {
  const hash = arrayHash(arr) + offset;
  const generator = prng(hash);

  const out = [];
  while (arr.length) {
    const idx = generator.next(arr.length);
    out.push(arr[idx]);
    arr = arr.slice(0, idx).concat(arr.slice(idx + 1));
  }

  return out;
};

export default shuffle;
