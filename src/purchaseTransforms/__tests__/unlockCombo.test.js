import unlockCombo from "../unlockCombo";
import newGame from "../../game/newGame";

let gameStructure;
describe("purchaseTransforms/unlockCombo", () => {
  beforeEach(() => {
    gameStructure = newGame();
    gameStructure.upgrades.unlockCombo = {
      level: 0,
      cost: 200
    };
  });

  it("modifies structure", () => {
    const game = unlockCombo(gameStructure);
    expect(game.coins).toEqual(-200);
    expect(game.upgrades.unlockCombo).toEqual({
      level: 1,
      cost: 400
    });
    expect(game.currentRound.purchases).toEqual([
      {
        action: "unlockCombo",
        value: 1,
        cost: 200,
        offset: 301
      }
    ]);
  });

  it("unlocks a finite number of combo upgrades", () => {
    expect(gameStructure.combos).toEqual({});

    let game = unlockCombo(gameStructure);
    expect(game.upgrades.comboStraight).toEqual({ level: 0, cost: 300 });
    expect(game.combos.straight).toEqual(2);

    game = unlockCombo(gameStructure);
    expect(game.upgrades.comboPairs).toEqual({ level: 0, cost: 300 });
    expect(game.combos.pairs).toEqual(10);

    game = unlockCombo(gameStructure);
    expect(game.upgrades.comboPrimes).toEqual({ level: 0, cost: 300 });
    expect(game.combos.primes).toEqual(5);

    game = unlockCombo(gameStructure);
    expect(game.upgrades.comboEvensOdds).toEqual({ level: 0, cost: 300 });
    expect(game.combos.evensOdds).toEqual(2);

    game = unlockCombo(gameStructure);
    expect(game.upgrades.comboMultiples).toEqual({ level: 0, cost: 300 });
    expect(game.combos.multiples).toEqual(10);
    expect(game.upgrades.unlockCombo.locked).toEqual(true);
  });

  it("doesnt change if locked", () => {
    gameStructure.upgrades.unlockCombo.locked = true;
    const game = unlockCombo(gameStructure);
    expect(game.coins).toEqual(0);
    expect(game.upgrades.unlockCombo.level).toEqual(0);
  });
});
