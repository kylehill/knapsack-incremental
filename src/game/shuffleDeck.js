import rebuildDeck from "./rebuildDeck";
import shuffle from "../lib/shuffle";

const shuffleDeck = lastRound => {
  const newDeck = rebuildDeck(lastRound);

  let purchaseOffset = 0;
  if (lastRound) {
    purchaseOffset = lastRound.purchases.reduce((mem, purchase) => {
      return mem + purchase.offset;
    }, 0);
  }

  return shuffle(newDeck, purchaseOffset);
};

export default shuffleDeck;
