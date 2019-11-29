import rebuildDeck from "../rebuildDeck";
import * as mocks from "../__mocks__/rebuildDeck.mock";

let lastRound;

describe("game/rebuildDeck", () => {
  beforeEach(() => {
    lastRound = {
      hand: [],
      stack: [],
      played: [],
      discarded: [],
      purchases: []
    };
  });

  it("returns a new deck when passed null for last round", () => {
    expect(rebuildDeck(null)).toEqual(mocks.initialDeck);
  });

  it("reconstitutes a deck entirely from hand", () => {
    lastRound.hand = [1, 2, 3, 4];
    expect(rebuildDeck(lastRound)).toEqual([1, 2, 3, 4]);
  });

  it("reconstitutes a deck entirely from stack", () => {
    lastRound.stack = [1, 2, 3, 4];
    expect(rebuildDeck(lastRound)).toEqual([1, 2, 3, 4]);
  });

  it("reconstitutes a deck entirely from played", () => {
    lastRound.played = [1, 2, 3, 4];
    expect(rebuildDeck(lastRound)).toEqual([1, 2, 3, 4]);
  });

  it("reconstitutes a deck entirely from discarded", () => {
    lastRound.discarded = [1, 2, 3, 4];
    expect(rebuildDeck(lastRound)).toEqual([1, 2, 3, 4]);
  });

  it("reconstitutes a deck predictably from all sources", () => {
    lastRound.hand = [1, 2];
    lastRound.stack = [3, 4];
    lastRound.discarded = [5, 6];
    lastRound.played = [7, 8];
    expect(rebuildDeck(lastRound)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  it("reconsitutes a deck with non-pertitent purchases", () => {
    lastRound.played = [1, 2, 3, 4];
    lastRound.purchases = [
      {
        action: "handSize",
        value: 4,
        offset: 101
      },
      {
        action: "comboUnlock",
        value: 1,
        offset: 1001
      }
    ];

    expect(rebuildDeck(lastRound)).toEqual([1, 2, 3, 4]);
  });

  it("reconstitutes a deck with trash purchase", () => {
    lastRound.stack = [1, 2, 3, 4];
    lastRound.played = [3, 5, 7, 9];
    lastRound.purchases = [
      {
        action: "trash",
        value: 2,
        offset: 2002
      }
    ];

    expect(rebuildDeck(lastRound)).toEqual([1, 3, 4, 3, 5, 7, 9]);
  });

  it("only removes one card per trash purchase", () => {
    lastRound.stack = [1, 2, 3, 4];
    lastRound.played = [2, 3, 4, 5];
    lastRound.purchases = [
      {
        action: "trash",
        value: 2,
        offset: 2002
      },
      {
        action: "trash",
        value: 3,
        offset: 2003
      },
      {
        action: "trash",
        value: 3,
        offset: 2003
      }
    ];

    expect(rebuildDeck(lastRound)).toEqual([1, 4, 2, 4, 5]);
  });

  it("reconstitutes a deck with add purchase", () => {
    lastRound.stack = [1, 2, 3, 4];
    lastRound.purchases = [
      {
        action: "add",
        value: 5,
        offset: 3005
      }
    ];

    expect(rebuildDeck(lastRound)).toEqual([1, 2, 3, 4, 5]);
  });

  it("throws an error on trash purchase of non-existent card", () => {
    lastRound.stack = [1, 2, 3, 4];
    lastRound.purchases = [
      {
        action: "trash",
        value: 5,
        offset: 2005
      }
    ];

    expect(() => {
      rebuildDeck(lastRound);
    }).toThrow("rebuildDeck: trashed card not in reconstituted deck");
  });
});
