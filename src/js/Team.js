export default class Team {
  constructor() {
    this.members = new Set();
  }
  add(character) {
    if (this.members.has(character)) {
      throw new Error("Такой персонаж уже есть в команде");
    }

    this.members.add(character);
  }
  addAll(...characters) {
    characters.forEach(character => this.members.add(character));
  }
  toArray() {
    return Array.from(this.members);
  }

  [Symbol.iterator]() {
    const membersArray = this.toArray();
    let index = 0;
    return {
      next() {
        if (index < membersArray.length) {
          return {
            value: membersArray[index++],
            done: false
          }
        }

        return {
          done: true
        }
      }
    }
  }
}