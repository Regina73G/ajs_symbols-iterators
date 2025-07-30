import Team from "../Team";
import Character from "../Character";
import { Bowerman } from "../Bowerman";
import { Magician } from "../Magician";
import { Swordsman } from "../Swordsman";

test("testing the addition of a character", () => {
  const character = new Character("Arthur", "Bowman");
  const team = new Team();
  team.add(character);
  expect(team.toArray()).toEqual([character]);
});

test("testing the addition of a duplicate character", () => {
  const character = new Character("Arthur", "Bowman");
  const team = new Team();
  team.add(character);
  expect(() => {
    team.add(character)
  }).toThrow("Такой персонаж уже есть в команде");
});

test("testing the addition multiple characters using addAll", () => {;
  const character = new Bowerman("Arthur");
  const character1 = new Magician("Maria");
  const character2 = new Swordsman("Alan");
  const team = new Team();
  team.addAll(character, character1, character2);
  expect(team.toArray()).toEqual([character, character1, character2]);
});

test("testing the addition of a duplicate character using addAll", () => {;
  const character = new Bowerman("Arthur");
  const character1 = new Magician("Maria");
  const character2 = new Swordsman("Alan");
  const team = new Team();
  team.addAll(character, character1);
  team.addAll(character, character2);
  expect(team.toArray()).toEqual([character, character1, character2]);
});

test("testing the iteration of the team", () => {
  const team = new Team();
  const character = new Bowerman("Arthur");
  const character1 = new Magician("Maria");
  team.add(character);
  team.add(character1);
  const iteratedCharacters = [];
  for (const character of team) {
    iteratedCharacters.push(character);
  }
  expect(iteratedCharacters).toEqual([character, character1]);
});