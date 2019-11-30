import combo from "../comboEvensOdds";
import newGame from "../../game/newGame";

let gameStructure;
describe("purchaseTransforms/combo", () => {
  beforeEach(() => {
    gameStructure = newGame();
    gameStructure.combos.evensOdds = 2;
    gameStructure.upgrades.comboEvensOdds = {
      level: 0,
      cost: 300
    };
  });

  it("modifies structure", () => {
    const game = combo(gameStructure);
    expect(game.coins).toEqual(-300);
    expect(game.combos.evensOdds).toEqual(4);
    expect(game.upgrades.comboEvensOdds).toEqual({
      cost: 600,
      level: 1
    });
    expect(game.currentRound.purchases).toEqual([
      {
        action: "comboEvensOdds",
        value: 1,
        cost: 300,
        offset: 1401
      }
    ]);
  });

  it("works multiple times", () => {
    let game = combo(gameStructure);
    game = combo(gameStructure);
    game = combo(gameStructure);
    game = combo(gameStructure);
    game = combo(gameStructure);
    expect(game.combos.evensOdds).toEqual(64);
    expect(game.upgrades.comboEvensOdds).toEqual({
      cost: 9600,
      level: 5
    });
    expect(game.currentRound.purchases.length).toEqual(5);
  });
});
