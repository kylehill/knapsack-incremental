import maxDiscards from "../maxDiscards";
import newGame from "../../game/newGame";

let gameStructure;

describe("purchaseTransforms/maxDiscards", () => {
  beforeEach(() => {
    gameStructure = newGame();
  });

  it("modifies structure", () => {
    const game = maxDiscards(gameStructure);
    expect(game.coins).toEqual(-100);
    expect(game.maxDiscards).toEqual(1);
    expect(game.upgrades.maxDiscards).toEqual({
      level: 1,
      cost: 1000
    });
    expect(game.currentRound.purchases).toEqual([
      {
        action: "maxDiscards",
        value: 1,
        cost: 100,
        offset: 201
      }
    ]);
  });

  it("works multiple times", () => {
    let game = maxDiscards(gameStructure);
    game = maxDiscards(game);
    game = maxDiscards(game);
    game = maxDiscards(game);
    expect(game.maxDiscards).toEqual(4);
    expect(game.upgrades.maxDiscards).toEqual({
      level: 4,
      cost: 1000000
    });
    expect(game.currentRound.purchases.length).toEqual(4);
  });

  it("unlocks add small/large cards at level 1", () => {
    let game = gameStructure;
    expect(game.upgrades.add).toBeUndefined();
    game = maxDiscards(gameStructure);
    expect(game.upgrades.add).toEqual({
      small: { cost: 200, cards: [], level: 0 },
      large: { cost: 1000, level: 0 }
    });
  });

  it("unlocks add trash cards at level 2", () => {
    let game = gameStructure;
    game = maxDiscards(gameStructure);
    expect(game.upgrades.trash).toBeUndefined();
    game = maxDiscards(gameStructure);
    expect(game.upgrades.trash).toEqual({
      cost: 200,
      level: 0
    });
  });
});
