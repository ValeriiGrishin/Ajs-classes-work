const Zombie = require('../Zombie.js');

describe('Zombie class', () => {
  test('should create Zombie with correct stats', () => {
    const zombie = new Zombie('Walker');
    
    expect(zombie).toEqual({
      name: 'Walker',
      type: 'Zombie',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    });
  });
});