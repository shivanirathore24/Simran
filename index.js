// Import necessary modules
const readline = require("readline");
const Player = require("./src/player");
const MagicalArena = require("./src/magicalArena");

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Display welcome message
console.log(" ***Welcome to Magical Arena Game!***");

// Function to prompt the user and retrieve input
async function prompt(question) {
  // Return a promise that resolves with user input
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

// Function to initialize the game
async function initializeGame() {
  // Prompt user for Player A's details
  const nameA = await prompt("Enter Player A's name: ");
  const healthA = parseInt(await prompt("Enter Player A's health: "));
  const strengthA = parseInt(await prompt("Enter Player A's strength: "));
  const attackA = parseInt(await prompt("Enter Player A's attack: "));

  // Prompt user for Player B's details
  const nameB = await prompt("Enter Player B's name: ");
  const healthB = parseInt(await prompt("Enter Player B's health: "));
  const strengthB = parseInt(await prompt("Enter Player B's strength: "));
  const attackB = parseInt(await prompt("Enter Player B's attack: "));

  // Create Player objects
  const playerA = new Player(nameA, healthA, strengthA, attackA);
  const playerB = new Player(nameB, healthB, strengthB, attackB);

  // Create MagicalArena object and start the game
  const arena = new MagicalArena(playerA, playerB);
  arena.startGame();

  // Close readline interface
  rl.close();
}

// Call the function to initialize the game
initializeGame();
// hey 
















// const Player = require("./src/player"); //importing file player.js
// const MagicalArena = require("./src/magicalArena");

// console.log(" ***Welcome to Megical Arena Game!***");

// /*
// created object of PlayerA and PlayerB using new keyword
// calling constuctor of PLayer class to intialize value.
// */
// const playerA = new Player("Player1", 50, 5, 10);
// const playerB = new Player("Player2", 100, 10, 5);

// const arena = new MagicalArena(playerA, playerB);
// arena.startGame();


