import Character from "./Character";

export class Magician extends Character {
  constructor(name) {
    super(name, "Magician");

    this.attack = 10;
    this.defence = 40;
  }
}