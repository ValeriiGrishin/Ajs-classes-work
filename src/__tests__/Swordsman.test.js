const Swordsman = require('../Swordsman.js');

describe('Swordsman class', () => {
  test('should create Swordsman with correct stats', () => {
    const swordsman = new Swordsman('Arthur');
    
    expect(swordsman).toEqual({
      name: 'Arthur',
      type: 'Swordsman',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    });
  });
});