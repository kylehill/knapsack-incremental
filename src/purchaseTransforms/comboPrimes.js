const comboPrimes = game => {
  const cost = game.upgrades.comboPrimes.cost;

  game.coins -= cost;
  game.upgrades.comboPrimes.level += 1;
  game.upgrades.comboPrimes.cost = cost * 2;
  game.combos.primes = game.combos.primes * 2;

  game.currentRound.purchases.push({
    action: "comboPrimes",
    value: game.upgrades.comboPrimes.level,
    cost,
    offset: 1300 + game.upgrades.comboPrimes.level
  });

  return game;
};

export default comboPrimes;
