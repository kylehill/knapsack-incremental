import combo from "../comboStraight";
import newGame from "../../game/newGame";

let gameStructure;
describe("purchaseTransforms/combo", () => {
  beforeEach(() => {
    gameStructure = newGame();
    gameStructure.combos.straight = 2;
    gameStructure.upgrades.comboStraight = {
      level: 0,
      cost: 300
    };
  });

  it("modifies structure", () => {
    const game = combo(gameStructure);
    expect(game.coins).toEqual(-300);
    expect(game.combos.straight).toEqual(4);
    expect(game.upgrades.comboStraight).toEqual({
      cost: 600,
      level: 1
    });
    expect(game.currentRound.purchases).toEqual([
      {
        action: "comboStraight",
        value: 1,
        cost: 300,
        offset: 1101
      }
    ]);
  });

  it("works multiple times", () => {
    let game = combo(gameStructure);
    game = combo(gameStructure);
    game = combo(gameStructure);
    game = combo(gameStructure);
    game = combo(gameStructure);
    expect(game.combos.straight).toEqual(64);
    expect(game.upgrades.comboStraight).toEqual({
      cost: 9600,
      level: 5
    });
    expect(game.currentRound.purchases.length).toEqual(5);
  });
});
