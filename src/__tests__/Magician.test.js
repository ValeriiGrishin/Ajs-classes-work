const Magician = require('../Magician.js');

describe('Magician class', () => {
  test('should create Magician with correct stats', () => {
    const magician = new Magician('Merlin');
    
    expect(magician).toEqual({
      name: 'Merlin',
      type: 'Magician',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    });
  });
});