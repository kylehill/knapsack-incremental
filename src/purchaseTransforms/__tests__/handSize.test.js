import handSize from "../handSize";
import newGame from "../../game/newGame";

let gameStructure;
describe("purchaseTransforms/handSize", () => {
  beforeEach(() => {
    gameStructure = newGame();
  });

  it("modifies structure", () => {
    const game = handSize(gameStructure);
    expect(game.coins).toEqual(-25);
    expect(game.handSize).toEqual(4);
    expect(game.upgrades.handSize).toEqual({
      level: 1,
      cost: 125
    });
    expect(game.currentRound.purchases).toEqual([
      {
        action: "handSize",
        value: 4,
        cost: 25,
        offset: 101
      }
    ]);
  });

  it("works multiple times", () => {
    let game = handSize(gameStructure);
    game = handSize(game);
    game = handSize(game);
    game = handSize(game);
    expect(game.handSize).toEqual(7);
    expect(game.upgrades.handSize).toEqual({
      level: 4,
      cost: 15625
    });
    expect(game.currentRound.purchases.length).toEqual(4);
  });

  it("unlocks combos at level 2", () => {
    let game = handSize(gameStructure);
    expect(game.upgrades.unlockCombo).toBeUndefined();
    game = handSize(game);
    expect(game.upgrades.unlockCombo).toEqual({
      level: 0,
      cost: 200
    });
  });
});
