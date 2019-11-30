import combo from "../comboMultiples";
import newGame from "../../game/newGame";

let gameStructure;
describe("purchaseTransforms/combo", () => {
  beforeEach(() => {
    gameStructure = newGame();
    gameStructure.combos.multiples = 10;
    gameStructure.upgrades.comboMultiples = {
      level: 0,
      cost: 300
    };
  });

  it("modifies structure", () => {
    const game = combo(gameStructure);
    expect(game.coins).toEqual(-300);
    expect(game.combos.multiples).toEqual(20);
    expect(game.upgrades.comboMultiples).toEqual({
      cost: 600,
      level: 1
    });
    expect(game.currentRound.purchases).toEqual([
      {
        action: "comboMultiples",
        value: 1,
        cost: 300,
        offset: 1501
      }
    ]);
  });

  it("works multiple times", () => {
    let game = combo(gameStructure);
    game = combo(gameStructure);
    game = combo(gameStructure);
    game = combo(gameStructure);
    game = combo(gameStructure);
    expect(game.combos.multiples).toEqual(320);
    expect(game.upgrades.comboMultiples).toEqual({
      cost: 9600,
      level: 5
    });
    expect(game.currentRound.purchases.length).toEqual(5);
  });
});
