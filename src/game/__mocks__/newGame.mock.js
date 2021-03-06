export const newGame = {
  target: 100,
  coins: 0,
  maxDiscards: 0,
  handSize: 3,
  combos: {},
  currentRound: {
    coins: 0,
    remaining: 100,
    discardsLeft: 0,
    hand: [20, 16, 14],
    stack: [
      25,
      18,
      24,
      13,
      14,
      15,
      19,
      22,
      22,
      10,
      12,
      12,
      20,
      21,
      24,
      10,
      25,
      15,
      23,
      17,
      19,
      16,
      21,
      17,
      13,
      23,
      11,
      18,
      11
    ],
    played: [],
    discarded: [],
    purchases: []
  },
  pastRounds: [],
  upgrades: {
    maxDiscards: {
      level: 0,
      cost: 100
    },
    handSize: {
      level: 0,
      cost: 25
    }
  }
};
