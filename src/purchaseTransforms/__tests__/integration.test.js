import transforms from '../index';
import newGame from '../../game/newGame';

const alphabetizeKeys = object => {
  return Object.keys(object).sort();
};

let gameStructure;
describe('purchaseTransforms/integration', () => {
  beforeEach(() => {
    gameStructure = newGame();
  });

  it('starts out predictably', () => {
    expect(alphabetizeKeys(gameStructure.upgrades)).toEqual(['handSize', 'maxDiscards']);
  });

  it('progresses from handSize to unlockCombo', () => {
    gameStructure = transforms.handSize(gameStructure);
    expect(alphabetizeKeys(gameStructure.upgrades)).toEqual(['handSize', 'maxDiscards']);
    gameStructure = transforms.handSize(gameStructure);
    expect(alphabetizeKeys(gameStructure.upgrades)).toEqual(['handSize', 'maxDiscards', 'unlockCombo']);
    expect(gameStructure.upgrades.handSize.level).toEqual(2);
  });

  it('progresses through combo unlocks', () => {
    gameStructure = transforms.handSize(gameStructure);
    gameStructure = transforms.handSize(gameStructure);

    gameStructure = transforms.unlockCombo(gameStructure);
    expect(alphabetizeKeys(gameStructure.upgrades)).toEqual([
      'comboStraight',
      'handSize',
      'maxDiscards',
      'unlockCombo'
    ]);

    gameStructure = transforms.unlockCombo(gameStructure);
    expect(alphabetizeKeys(gameStructure.upgrades)).toEqual([
      'comboPairs',
      'comboStraight',
      'handSize',
      'maxDiscards',
      'unlockCombo'
    ]);

    gameStructure = transforms.unlockCombo(gameStructure);
    expect(alphabetizeKeys(gameStructure.upgrades)).toEqual([
      'comboPairs',
      'comboPrimes',
      'comboStraight',
      'handSize',
      'maxDiscards',
      'unlockCombo'
    ]);

    gameStructure = transforms.unlockCombo(gameStructure);
    expect(alphabetizeKeys(gameStructure.upgrades)).toEqual([
      'comboEvensOdds',
      'comboPairs',
      'comboPrimes',
      'comboStraight',
      'handSize',
      'maxDiscards',
      'unlockCombo'
    ]);

    gameStructure = transforms.unlockCombo(gameStructure);
    expect(alphabetizeKeys(gameStructure.upgrades)).toEqual([
      'comboEvensOdds',
      'comboMultiples',
      'comboPairs',
      'comboPrimes',
      'comboStraight',
      'handSize',
      'maxDiscards',
      'unlockCombo'
    ]);
    expect(gameStructure.upgrades.unlockCombo.locked).toEqual(true);
  });

  it('progresses from maxDiscards to add and trash', () => {
    gameStructure = transforms.maxDiscards(gameStructure);
    expect(alphabetizeKeys(gameStructure.upgrades)).toEqual(['add', 'handSize', 'maxDiscards']);
    gameStructure = transforms.maxDiscards(gameStructure);
    expect(alphabetizeKeys(gameStructure.upgrades)).toEqual(['add', 'handSize', 'maxDiscards', 'trash']);
    expect(gameStructure.upgrades.maxDiscards.level).toEqual(2);
  });
});
