import newRound from "../newRound";
import * as mocks from "../__mocks__/newRound.mock";

let gameStructure, currentRound;

describe("game/newRound", () => {
  beforeEach(() => {
    gameStructure = {
      target: 100,
      coins: 0,
      maxDiscards: 0,
      handSize: 3,
      pastRounds: [],
      upgrades: {}
    };

    currentRound = {
      hand: [1, 2],
      stack: [3, 4],
      discarded: [5, 6],
      played: [7, 8],
      purchases: []
    };
  });

  it("creates a new round structure without a previous round", () => {
    expect(newRound(gameStructure)).toEqual(mocks.initialRound);
  });

  it("creates a new round structure with a previous round", () => {
    gameStructure.currentRound = currentRound;

    expect(newRound(gameStructure)).toEqual(mocks.previousRound);
  });

  it("creates a new round structure with a previous round, reflecting purchase offsets", () => {
    currentRound.purchases = [
      {
        action: "comboUnlock",
        value: 1,
        offset: 1001,
        cost: 100
      }
    ];
    gameStructure.currentRound = currentRound;

    expect(newRound(gameStructure)).toEqual(mocks.offsetRound);
  });

  it("creates a new round structure reflecting game state", () => {
    gameStructure.target = 250;
    gameStructure.coins = 1000;
    gameStructure.maxDiscards = 4;
    gameStructure.handSize = 5;
    gameStructure.currentRound = currentRound;

    expect(newRound(gameStructure)).toEqual(mocks.upgradedRound);
  });
});
