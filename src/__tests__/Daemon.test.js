const Daemon = require('../Daemon.js');

describe('Daemon class', () => {
  test('should create Daemon with correct stats', () => {
    const daemon = new Daemon('Lucifer');
    
    expect(daemon).toEqual({
      name: 'Lucifer',
      type: 'Daemon',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    });
  });
});