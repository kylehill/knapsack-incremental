const maxDiscards = game => {
  const cost = game.upgrades.maxDiscards.cost;

  game.coins -= cost;
  game.maxDiscards += 1;
  game.upgrades.maxDiscards.level += 1;
  game.upgrades.maxDiscards.cost = cost * 10;

  game.currentRound.purchases.push({
    action: "maxDiscards",
    value: game.maxDiscards,
    cost,
    offset: 200 + game.upgrades.maxDiscards.level
  });

  if (game.upgrades.maxDiscards.level === 1) {
    game.upgrades.add = {
      small: { level: 0, cost: 200, cards: [] },
      large: { level: 0, cost: 1000 }
    };
  }

  if (game.upgrades.maxDiscards.level === 2) {
    game.upgrades.trash = {
      level: 0,
      cost: 200
    };
  }

  return game;
};

export default maxDiscards;
