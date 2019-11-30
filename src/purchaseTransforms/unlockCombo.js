const unlockCombo = game => {
  if (game.upgrades.unlockCombo.locked) {
    return game;
  }

  const cost = game.upgrades.unlockCombo.cost;

  game.coins -= cost;
  game.upgrades.unlockCombo.level += 1;
  game.upgrades.unlockCombo.cost = cost * 2;

  game.currentRound.purchases.push({
    action: "unlockCombo",
    value: game.upgrades.unlockCombo.level,
    cost,
    offset: 300 + game.upgrades.unlockCombo.level
  });

  switch (game.upgrades.unlockCombo.level) {
    case 1: {
      game.combos.straight = 2;
      game.upgrades.comboStraight = {
        level: 0,
        cost: 300
      };
      return game;
    }

    case 2: {
      game.combos.pairs = 10;
      game.upgrades.comboPairs = {
        level: 0,
        cost: 300
      };
      return game;
    }

    case 3: {
      game.combos.primes = 5;
      game.upgrades.comboPrimes = {
        level: 0,
        cost: 300
      };
      return game;
    }

    case 4: {
      game.combos.evensOdds = 2;
      game.upgrades.comboEvensOdds = {
        level: 0,
        cost: 300
      };
      return game;
    }

    case 5: {
      game.combos.multiples = 10;
      game.upgrades.unlockCombo.locked = true;
      game.upgrades.comboMultiples = {
        level: 0,
        cost: 300
      };
    }

    default: {
      return game;
    }
  }
};

export default unlockCombo;
