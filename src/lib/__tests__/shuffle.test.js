import shuffle from "../shuffle";
import mockResult from "../__mocks__/shuffle.mock";

describe("lib/shuffle", () => {
  it("predictably and non-mutatively shuffles a small array", () => {
    const arr = [1, 1, 2, 3, 5, 8];
    expect(shuffle(arr)).toEqual([5, 1, 1, 3, 2, 8]);
    expect(arr).toEqual([1, 1, 2, 3, 5, 8]);
  });

  it("predictably shuffles a tiny array", () => {
    const arr = [1];
    expect(shuffle(arr)).toEqual([1]);
  });

  it("predictably shuffles repeatedly", () => {
    const arr = shuffle([1, 1, 2, 3, 5, 8]);
    expect(shuffle(arr)).toEqual([1, 5, 1, 3, 8, 2]);
  });

  it("predictably shuffles a large array", () => {
    const arr = Array.from(Array(500), (_, idx) => idx);
    expect(shuffle(arr)).toEqual(mockResult);
  });

  it("predictably shuffles with an offset", () => {
    const arr = [1, 1, 2, 3, 5, 8];
    expect(shuffle(arr, 1)).toEqual([8, 1, 3, 1, 2, 5]);
  });
});
