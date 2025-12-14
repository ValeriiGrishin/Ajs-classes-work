const Undead = require('../Undead.js');

describe('Undead class', () => {
  test('should create Undead with correct stats', () => {
    const undead = new Undead('Dracula');
    
    expect(undead).toEqual({
      name: 'Dracula',
      type: 'Undead',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    });
  });
});