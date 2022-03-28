import Team from '../team';
import Bowerman from '../bowerman';
import Zombie from '../zombie';

test('Проверка добавления игрока', () => {
  const team = new Team();
  const unit1 = new Bowerman('игрок1');
  team.add(unit1);
  const received = team.members;
  const expected = new Set([new Bowerman('игрок1')]);
  expect(received).toEqual(expected);
});

test('Проверка добавления игрока не наследуемого Character', () => {
  const team = new Team();
  const unit1 = {
    name: 'игрок1',
  };
  const received = () => team.add(unit1);
  const expected = 'ОШИБКА: Невозможно добавить данного персонажа';
  expect(received).toThrow(expected);
});

test('Проверка добавления существующего игрока', () => {
  const team = new Team();
  const unit1 = new Bowerman('игрок1');
  team.add(unit1);
  const received = () => team.add(unit1);
  const expected = 'ОШИБКА: Персонаж был добавлен ранее';
  expect(received).toThrow(expected);
});

test('Добавление нескольких игроков', () => {
  const team = new Team();
  const unit1 = new Bowerman('игрок1');
  const unit2 = new Zombie('игрок2');
  team.addAll(unit1, unit2, unit1);
  const received = team.members;
  const expected = new Set([unit1, unit2]);
  expect(received).toEqual(expected);
});

test('Возвращение массива игроков', () => {
  const team = new Team();
  const unit1 = new Bowerman('игрок1');
  const unit2 = new Zombie('игрок2');
  team.addAll(unit1, unit2);
  const received = team.toArray();
  const expected = [unit1, unit2];
  expect(received).toEqual(expected);
});
