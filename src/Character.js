class Character {
  static TYPES = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

  constructor(name, type) {
    // Валидация имени
    if (typeof name !== 'string') {
      throw new Error('Имя должно быть строкой');
    }
    if (name.length < 2 || name.length > 10) {
      throw new Error('Длина имени должна быть от 2 до 10 символов');
    }

    // Валидация типа
    if (!Character.TYPES.includes(type)) {
      throw new Error(`Неизвестный тип персонажа: ${type}`);
    }

    // Установка свойств
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error('Нельзя повысить уровень умершего персонажа');
    }
    this.level += 1;
    this.attack = Math.round(this.attack * 1.2);
    this.defence = Math.round(this.defence * 1.2);
    this.health = 100;
  }

  damage(points) {
    //проверка на points <= 0
    if (this.health <= 0 || points <= 0) return;
    const damageTaken = points * (1 - this.defence / 100);
    this.health -= damageTaken;
    if (this.health < 0) {
      this.health = 0;
    }
  }
}

module.exports = Character;