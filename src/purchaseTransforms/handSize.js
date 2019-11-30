const handSize = game => {
  const cost = game.upgrades.handSize.cost;

  game.coins -= cost;
  game.handSize += 1;
  game.upgrades.handSize.level += 1;
  game.upgrades.handSize.cost = cost * 5;

  game.currentRound.purchases.push({
    action: "handSize",
    value: game.handSize,
    cost,
    offset: 100 + game.upgrades.handSize.level
  });

  if (game.upgrades.handSize.level === 2) {
    game.upgrades.unlockCombo = {
      level: 0,
      cost: 200
    };
  }
  return game;
};

export default handSize;
