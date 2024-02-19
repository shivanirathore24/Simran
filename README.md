## Documentation for Magical Arena

### Step-1: Setting up Directory Structure:

1. Create an 'index.js' file under project directory i.e 'magical_arena'. Execution of program will start from index.js (which is main file).

2. For creating 'package.json,' run the following command in your project directory:
   ```bash
   npm init
   ```
3. Created other two files : 'player.js' and 'magicalArena.js' under src folder

4. To run program : Open terminal --> type command:
   ```bash
   node index.js
   ```

### Step-2 : Created Class, constructor and Objects

1. Defined a 'Player' class with attributes like name, health, strength, and attack. It exports the class for use in other modules.
2. Defined a 'magicalArena' class that takes two players and stores them in an array. It has a startGame method that logs a message but will implement later.
3. index.js --> wrote code that instantiates two players, sets up an arena object with them, and calls the startGame method to initiate the game.

### Step- 3 : Implemented functionalities

1. startGame() in magicalArena class:

   - This function first identifies the attacker based on lower health.
   - Then, it enters a loop that continues as long as both players are alive. Within the loop, it calls the attack function and swaps the attacker and defender roles for the next round.
   - Finally, it finds the remaining player and declares them the winner

2. attack(attacker, defender) in magicalArena class:

   - Attacker and defender roll dice: attackRoll and defendRoll calculated.
   - Damage calculation: damage based on attacker's roll and attack, defendDamage based on defender's roll and strength.
   - Apply damage: actualDamage is maximum of 0 or damage - defendDamage, applied to defender using takeDamage.
   - Log results: Attack and defense rolls, defender's health printed to console.

3. takeDamage(damage) in Player class:

   - function subtracts the given damage from the player's health. However, it makes sure the health never goes below 0. So, even if the damage is high, the health will stay at 0, preventing the player from dying further.

4. rollDice() in Player class:
   - function pretends to roll a dice by picking a random number between 1 and 6. It then removes any decimals from the number (like 3.7) and gives you the whole number (like 3) as the result. This represents the outcome of the dice roll.

### Step-4 : Make code more modular

1. Created seperate class for 'dice' functionality:
   - The code sets up a Magical Arena game by collecting player details through a prompt interface, creating player objects, initializing the game with these players, and closing the input interface afterward.
2. updated code in 'class' player and 'magicalArena' respectively.

### Step-5 : Making user Friendly Interface
Take input from user for player1 and player2 details, so updated file 'index.js' file:
 - The code initializes a Magical Arena game.
 - It collects player details via prompts.
 - Player objects are created with the provided details.
 - The game is initialized with these players.
 - The input interface is closed afterward.

To run this application, use command: 
   ```bash
   node index.js 
   ```


### Step-4 : Make code more modular

1. Created seperate class for 'dice' functionality:
   - The code sets up a Magical Arena game by collecting player details through a prompt interface, creating player objects, initializing the game with these players, and closing the input interface afterward.
2. updated code in 'class' player and 'magicalArena' respectively.

### Step-5 : Making user Friendly Interface
Take input from user for player1 and player2 details, so updated file 'index.js' file:
 - The code initializes a Magical Arena game.
 - It collects player details via prompts.
 - Player objects are created with the provided details.
 - The game is initialized with these players.
 - The input interface is closed afterward.

To run this application, use command: 
   ```bash
   node index.js 
   ```





