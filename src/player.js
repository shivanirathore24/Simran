class Player {
  constructor(name, health, strength, attack) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.attack = attack;
  }

  takeDamage(damage) {
    this.health = Math.max(0, this.health - damage);
  }
}

module.exports = Player; // //exporting class to be accessible outside
