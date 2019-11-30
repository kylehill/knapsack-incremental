import shuffleDeck from "../shuffleDeck";
import * as mocks from "../__mocks__/shuffleDeck.mock";

let lastRound;

describe("game/shuffleDeck", () => {
  beforeEach(() => {
    lastRound = {
      hand: [],
      stack: [],
      discarded: [],
      played: [],
      purchases: []
    };
  });
  it("creates and shuffles a deck when passed null for last round", () => {
    expect(shuffleDeck(null)).toEqual(mocks.initialDeck);
  });

  it("creates and shuffles a deck when passed an object for last round", () => {
    lastRound.stack = [1, 1, 2, 3, 5, 8];
    expect(shuffleDeck(lastRound)).toEqual([5, 1, 1, 3, 2, 8]);
  });

  it("creates and shuffles a deck with purchase offsets", () => {
    lastRound.stack = [1, 1, 2, 3, 5, 8];
    lastRound.purchases = [
      {
        action: "handSize",
        value: 4,
        offset: 101,
        cost: 25
      }
    ];
    expect(shuffleDeck(lastRound)).toEqual([1, 5, 2, 3, 1, 8]);
  });
});
