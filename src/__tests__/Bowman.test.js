const Bowman = require('../Bowman.js');

describe('Bowman class', () => {
  test('should create Bowman with correct stats', () => {
    const bowman = new Bowman('Robin');
    
    expect(bowman).toEqual({
      name: 'Robin',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    });
  });
});