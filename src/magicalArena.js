const Dice = require("./dice");

class MagicalArena {
  constructor(playerA, playerB) {
    this.players = [playerA, playerB];
    this.dice = new Dice(6); // Creating a 6-sided dice
  }

  attack(attacker, defender) {
    const attackRoll = this.dice.roll();
    const defendRoll = this.dice.roll();

    const damage = attackRoll * attacker.attack;
    const defendDamage = defendRoll * defender.strength;

    const actualDamage = Math.max(0, damage - defendDamage);
    defender.takeDamage(actualDamage);

    console.log(
      `${attacker.name} attacks with roll ${attackRoll}, ${defender.name} defends with roll ${defendRoll}. ${defender.name} health reduced to ${defender.health}`
    );
  }

  startGame() {
    // if (this.players[0].health < this.players[1].health) {
    //   [attacker, defender] = this.players;
    // } else {
    //   [defender, attacker] = this.players;
    // }
    let [attacker, defender] = this.players.sort((a, b) => a.health - b.health);

    while (this.players.every((player) => player.health > 0)) {
      this.attack(attacker, defender);

      // Switch players for the next turn
      this.players.reverse();
      [attacker, defender] = this.players;
    }

    const winner = this.players.find((player) => player.health > 0);
    console.log(`${winner.name} wins!`);
  }
}

module.exports = MagicalArena;
