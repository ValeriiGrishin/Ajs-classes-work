const Character = require('../Character.js');

describe('Character class', () => {
  test('should create character with valid parameters', () => {
    const swordsman = new Character('Arthur', 'Swordsman');
    const magician = new Character('Merlin', 'Magician');
    
    expect(swordsman).toEqual({
      name: 'Arthur',
      type: 'Swordsman',
      health: 100,
      level: 1,
    });
    
    expect(magician).toEqual({
      name: 'Merlin',
      type: 'Magician',
      health: 100,
      level: 1,
    });
  });

  test('should throw error for non-string name', () => {
    expect(() => new Character(123, 'Swordsman')).toThrow('Имя должно быть строкой');
    expect(() => new Character(null, 'Swordsman')).toThrow('Имя должно быть строкой');
  });

  test('should throw error for too short name', () => {
    expect(() => new Character('A', 'Daemon')).toThrow('Длина имени должна быть от 2 до 10 символов');
  });

  test('should throw error for too long name', () => {
    expect(() => new Character('ABCDEFGHIJK', 'Undead')).toThrow('Длина имени должна быть от 2 до 10 символов');
  });

  test('should throw error for invalid type', () => {
    expect(() => new Character('Valid', 'InvalidType')).toThrow('Неизвестный тип персонажа: InvalidType');
  });

  test('levelUp should increase level and stats', () => {
    const character = new Character('Warrior', 'Zombie');
    character.attack = 40;
    character.defence = 10;
    
    character.levelUp();
    
    expect(character).toEqual({
      name: 'Warrior',
      type: 'Zombie',
      health: 100,
      level: 2,
      attack: 48,
      defence: 12,
    });
  });

  test('levelUp should throw error when dead', () => {
    const character = new Character('DeadHero', 'Daemon');
    character.health = 0;
    
    expect(() => character.levelUp()).toThrow('Нельзя повысить уровень умершего персонажа');
  });

  test('levelUp should throw error when health is negative', () => {
    const character = new Character('DeadHero', 'Daemon');
    character.health = -10;
    
    expect(() => character.levelUp()).toThrow('Нельзя повысить уровень умершего персонажа');
  });

  test('damage should reduce health correctly', () => {
    const character = new Character('Mage', 'Magician');
    character.defence = 40;
    
    character.damage(50);
    expect(character.health).toBe(70);
  });

  test('damage should not reduce health below 0', () => {
    const character = new Character('Target', 'Swordsman');
    character.defence = 10;
    
    character.damage(200);
    expect(character.health).toBe(0);
  });

  test('damage should not affect health for zero or negative points', () => {
    const character = new Character('Warrior', 'Swordsman');
    character.defence = 10;
    
    character.damage(-10);
    expect(character.health).toBe(100);
    
    character.damage(0);
    expect(character.health).toBe(100);
    
    character.damage(20);
    expect(character.health).toBe(82);
  });
});