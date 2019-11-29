import prng from "../prng";

describe("lib/prng", () => {
  it("has predictable randomness with seed", () => {
    let generator = prng(1);
    expect(generator.next()).toEqual(0.13153778773875702);
    expect(generator.next()).toEqual(0.7556053220812281);

    generator = prng(1);
    expect(generator.next()).toEqual(0.13153778773875702);
    expect(generator.next()).toEqual(0.7556053220812281);
  });

  it("has predictable randomness with large seed", () => {
    const generator = prng(Number.MAX_SAFE_INTEGER);
    expect(generator.next()).toEqual(0.3394222462916954);
    expect(generator.next()).toEqual(0.6696985942960704);
  });

  it("has predictable randomness with negative seed", () => {
    const generator = prng(Number.MIN_SAFE_INTEGER);
    expect(generator.next()).toEqual(0.529039965038225);
    expect(generator.next()).toEqual(0.5746960831570402);
  });

  it("has predictable randomness with numbers between", () => {
    const generator = prng(1);
    expect(generator.next(26)).toEqual(3);
    expect(generator.next(26)).toEqual(19);
  });
});
