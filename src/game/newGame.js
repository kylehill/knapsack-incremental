import newRound from "./newRound";

const newGame = () => {
  const game = {
    target: 100,
    coins: 0,
    maxDiscards: 0,
    handSize: 3,
    combos: {},
    currentRound: null,
    pastRounds: [],
    upgrades: {
      handSize: { level: 0, cost: 25 },
      maxDiscards: { level: 0, cost: 100 }
    }
  };

  game.currentRound = newRound(game);

  return game;
};

export default newGame;
