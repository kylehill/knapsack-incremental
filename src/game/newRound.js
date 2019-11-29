import shuffleDeck from "./shuffleDeck";

const newRound = gameStructure => {
  const lastRound = gameStructure.currentRound || null;
  const shuffledDeck = shuffleDeck(lastRound);

  return {
    hand: shuffledDeck.slice(0, gameStructure.handSize),
    stack: shuffledDeck.slice(gameStructure.handSize),
    discarded: [],
    played: [],
    discardsLeft: gameStructure.maxDiscards,
    remaining: gameStructure.target,
    coins: 0
  };
};

export default newRound;
