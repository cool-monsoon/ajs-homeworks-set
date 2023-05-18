export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Такой объект уже существует!');
    }
    this.members.add(character);
  }

  addAll(...characters) {
    const arr = [];
    arr.push(...characters);
    arr.forEach((character) => this.members.add(character));
  }

  toArray() {
    return Array.from(this.members);
  }
}
