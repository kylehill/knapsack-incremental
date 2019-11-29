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
    upgrades: {}
  };

  game.currentRound = newRound(game);

  return game;
};

export default newGame;
