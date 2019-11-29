const initialDeck = Array.from(Array(32), (_, idx) => {
  return 10 + Math.floor(idx / 2);
});

const rebuildDeck = lastRound => {
  if (lastRound === null) {
    return initialDeck;
  }

  const reconstitutedDeck = [
    ...lastRound.hand,
    ...lastRound.stack,
    ...lastRound.discarded,
    ...lastRound.played
  ];

  return lastRound.purchases.reduce((mem, purchase) => {
    switch (purchase.action) {
      case "trash": {
        const trashIndex = mem.indexOf(purchase.value);
        if (trashIndex === -1) {
          throw new Error(
            "rebuildDeck: trashed card not in reconstituted deck"
          );
        }

        return mem.slice(0, trashIndex).concat(mem.slice(trashIndex + 1));
      }

      case "add": {
        return mem.concat(purchase.value);
      }

      default: {
        return mem;
      }
    }
  }, reconstitutedDeck);
};

export default rebuildDeck;
