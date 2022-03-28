import Character from '../character';
import Bowerman from '../bowerman';
import Swordsman from '../swordsman';
import Magician from '../magician';
import Daemon from '../daemon';
import Undead from '../undead';
import Zombie from '../zombie';

test('Character created throw name', () => {
  const received = () => new Character('1', 'Bowerman');
  const expected = 'Имя должно быть длиной от 2 до 10 символов';
  expect(received).toThrow(expected);
});

test('Character created throw type', () => {
  const received = () => new Character('heroesName', 'unknown_type');
  const expected = 'Неизвестный тип персонажа';
  expect(received).toThrow(expected);
});

test('character method "levelUp" - level++', () => {
  const unit1 = new Bowerman('герой1');
  unit1.levelUp();

  const received = unit1.level;
  const expected = 2;
  expect(received).toEqual(expected);
});

test('character method "levelUp" - throw', () => {
  const unit1 = new Bowerman('герой1');
  unit1.health = 0;
  const received = () => unit1.levelUp();
  const expected = 'Нельзя повысить левел умершего';
  expect(received).toThrow(expected);
});

test('character method "damage 20" - health change', () => {
  const unit1 = new Bowerman('герой1');
  unit1.damage(20);
  const received = unit1.health;
  const expected = 85;
  expect(received).toEqual(expected);
});

test('character method "damage 2000" - health change', () => {
  const unit1 = new Bowerman('герой1');
  unit1.damage(2000);
  const received = unit1.health;
  const expected = 0;
  expect(received).toEqual(expected);
});

test('Bowerman - instance of Caracter', () => {
  const received = new Bowerman('герой1');
  expect(received).toBeInstanceOf(Character);
});

test('Swordsman - instance of Caracter', () => {
  const received = new Swordsman('герой1');
  expect(received).toBeInstanceOf(Character);
});

test('Magician - instance of Caracter', () => {
  const received = new Magician('герой1');
  expect(received).toBeInstanceOf(Character);
});

test('Daemon - instance of Caracter', () => {
  const received = new Daemon('герой1');
  expect(received).toBeInstanceOf(Character);
});

test('Undead - instance of Caracter', () => {
  const received = new Undead('герой1');
  expect(received).toBeInstanceOf(Character);
});

test('Zombie - instance of Caracter', () => {
  const received = new Zombie('герой1');
  expect(received).toBeInstanceOf(Character);
});
