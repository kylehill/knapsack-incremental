const comboMultiples = game => {
  const cost = game.upgrades.comboMultiples.cost;

  game.coins -= cost;
  game.upgrades.comboMultiples.level += 1;
  game.upgrades.comboMultiples.cost = cost * 2;
  game.combos.multiples = game.combos.multiples * 2;

  game.currentRound.purchases.push({
    action: "comboMultiples",
    value: game.upgrades.comboMultiples.level,
    cost,
    offset: 1500 + game.upgrades.comboMultiples.level
  });

  return game;
};

export default comboMultiples;
