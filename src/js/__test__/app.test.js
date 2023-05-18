import Team from '../app';

const team = new Team();

test('Testing character addition', () => {
  team.add('swordsman');
  expect(team.toArray()).toEqual(['swordsman']);
});

test('Testing character duplication', () => {
  expect(() => team.add('swordsman')).toThrow(new Error('Такой объект уже существует!'));
});

test('Testing all characters addition', () => {
  team.addAll('bowerman', 'deamon', 'magician', 'swordsman', 'undead', 'zombie', 'bowerman');
  expect(team.toArray()).toEqual(['swordsman', 'bowerman', 'deamon', 'magician', 'undead', 'zombie']);
});
