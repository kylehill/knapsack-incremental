import arrayHash from "../arrayHash";

describe("lib/arrayHash", () => {
  it("predictably hashes small arrays", () => {
    const arr = [1, 2, 3];
    expect(arrayHash(arr)).toEqual(17);
    expect(arrayHash(arr)).toEqual(17);
  });

  it("predictably hashes large arrays", () => {
    const arr = Array.from(Array(1e5), (_, idx) => idx);
    expect(arrayHash(arr)).toEqual(156393750);
  });

  it("predictably hashes empty arrays", () => {
    const arr = [];
    expect(arrayHash(arr)).toEqual(0);
  });

  it("throws an error with illegal values", () => {
    const arr = [1, 1, "two", 3, 5];
    expect(() => {
      arrayHash(arr);
    }).toThrow("arrayHash: all array values must be integers");
  });
});
