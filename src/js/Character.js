export default class Character {
  constructor(name, type) {
    if(typeof name !== "string" || name.length < 2 || name.length > 10) {
      throw new Error("Name must be a string with length between 2 and 10 character");
    }

    const validTypes = ["Bowman", "Swordsman", "Magician", "Daemon", "Undead", "Zombie"];
    if(!validTypes.includes(type)) {
      throw new Error("Invalid character type");    
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }
}