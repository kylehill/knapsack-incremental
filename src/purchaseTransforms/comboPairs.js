const comboPairs = game => {
  const cost = game.upgrades.comboPairs.cost;

  game.coins -= cost;
  game.upgrades.comboPairs.level += 1;
  game.upgrades.comboPairs.cost = cost * 2;
  game.combos.pairs = game.combos.pairs * 2;

  game.currentRound.purchases.push({
    action: "comboPairs",
    value: game.upgrades.comboPairs.level,
    cost,
    offset: 1200 + game.upgrades.comboPairs.level
  });

  return game;
};

export default comboPairs;
