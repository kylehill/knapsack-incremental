const comboStraight = game => {
  const cost = game.upgrades.comboStraight.cost;

  game.coins -= cost;
  game.upgrades.comboStraight.level += 1;
  game.upgrades.comboStraight.cost = cost * 2;
  game.combos.straight = game.combos.straight * 2;

  game.currentRound.purchases.push({
    action: "comboStraight",
    value: game.upgrades.comboStraight.level,
    cost,
    offset: 1100 + game.upgrades.comboStraight.level
  });

  return game;
};

export default comboStraight;
