const comboEvensOdds = game => {
  const cost = game.upgrades.comboEvensOdds.cost;

  game.coins -= cost;
  game.upgrades.comboEvensOdds.level += 1;
  game.upgrades.comboEvensOdds.cost = cost * 2;
  game.combos.evensOdds = game.combos.evensOdds * 2;

  game.currentRound.purchases.push({
    action: "comboEvensOdds",
    value: game.upgrades.comboEvensOdds.level,
    cost,
    offset: 1400 + game.upgrades.comboEvensOdds.level
  });

  return game;
};

export default comboEvensOdds;
