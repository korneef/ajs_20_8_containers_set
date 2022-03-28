import Character from './character';

export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(unit) {
    if (!(unit instanceof Character)) {
      throw new Error('ОШИБКА: Невозможно добавить данного персонажа');
    }
    if (this.members.has(unit)) {
      throw new Error('ОШИБКА: Персонаж был добавлен ранее');
    }
    return this.members.add(unit);
  }

  addAll(...units) {
    units.forEach((item) => {
      this.members.add(item);
    });
  }

  toArray() {
    return [...this.members];
  }
}
