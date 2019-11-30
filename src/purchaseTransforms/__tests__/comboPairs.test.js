import combo from "../comboPairs";
import newGame from "../../game/newGame";

let gameStructure;
describe("purchaseTransforms/combo", () => {
  beforeEach(() => {
    gameStructure = newGame();
    gameStructure.combos.pairs = 10;
    gameStructure.upgrades.comboPairs = {
      level: 0,
      cost: 300
    };
  });

  it("modifies structure", () => {
    const game = combo(gameStructure);
    expect(game.coins).toEqual(-300);
    expect(game.combos.pairs).toEqual(20);
    expect(game.upgrades.comboPairs).toEqual({
      cost: 600,
      level: 1
    });
    expect(game.currentRound.purchases).toEqual([
      {
        action: "comboPairs",
        value: 1,
        cost: 300,
        offset: 1201
      }
    ]);
  });

  it("works multiple times", () => {
    let game = combo(gameStructure);
    game = combo(gameStructure);
    game = combo(gameStructure);
    game = combo(gameStructure);
    game = combo(gameStructure);
    expect(game.combos.pairs).toEqual(320);
    expect(game.upgrades.comboPairs).toEqual({
      cost: 9600,
      level: 5
    });
    expect(game.currentRound.purchases.length).toEqual(5);
  });
});
