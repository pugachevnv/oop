import Character from "./Character";

export default class Swordsman extends Character {
    constructor(name, type) {
        super(name, type) 
        this.attack = 25;
        this.defence = 25;
    }
}