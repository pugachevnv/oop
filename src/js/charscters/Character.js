export default class Character {
    constructor(name, type) {
        this.type = type;

        if (name == 'string' && name.length >= 2 && name.length <= 10) { // проверка name и type  
            this.name = name;
        } else {
            throw new Error('не менее 2 и не более 10 символов');
        }

        const types = [
            'Bowman',
            'Swordsman',
            'Magician',
            'Daemon',
            'Undead',
            'Zombie'
        ];

        if (!types.includes(type)) {
            throw new Error('перcонажа нет в списке'); 
        }

        this.health = 100;
        this.level = 1;
        this.attack = null;
        this.defence = null;
    }

    levelUp() {
        if (this.health !== 0) {
            this.level += 1;
            this.attack *= 1.2;
            this.defence *= 1.2;
            this.health = 100;
        } else {
            throw new Error ('нельзя повысить левел умершего');
        }
    }

    damage(points) {
        if (this.health >= 0) {
            health -= points * (1 - defence / 100);
        } else {
            throw new Error ('нельзя нанести ущерб умершему');
        }
    }
}
