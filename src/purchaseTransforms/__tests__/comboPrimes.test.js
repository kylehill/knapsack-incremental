import combo from "../comboPrimes";
import newGame from "../../game/newGame";

let gameStructure;
describe("purchaseTransforms/combo", () => {
  beforeEach(() => {
    gameStructure = newGame();
    gameStructure.combos.primes = 5;
    gameStructure.upgrades.comboPrimes = {
      level: 0,
      cost: 300
    };
  });

  it("modifies structure", () => {
    const game = combo(gameStructure);
    expect(game.coins).toEqual(-300);
    expect(game.combos.primes).toEqual(10);
    expect(game.upgrades.comboPrimes).toEqual({
      cost: 600,
      level: 1
    });
    expect(game.currentRound.purchases).toEqual([
      {
        action: "comboPrimes",
        value: 1,
        cost: 300,
        offset: 1301
      }
    ]);
  });

  it("works multiple times", () => {
    let game = combo(gameStructure);
    game = combo(gameStructure);
    game = combo(gameStructure);
    game = combo(gameStructure);
    game = combo(gameStructure);
    expect(game.combos.primes).toEqual(160);
    expect(game.upgrades.comboPrimes).toEqual({
      cost: 9600,
      level: 5
    });
    expect(game.currentRound.purchases.length).toEqual(5);
  });
});
