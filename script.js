//global variables, can be accessed by all functions
  
  //declare a variable named playerName that stores the value the player enters from a prompt
  let playerName = prompt()

  //declare a variable named playerHealth and set it equal to the number value 15
  let playerHealth = 15

  //assign a name of a monster (ex 'Werewolf') as a string to a variable named monsterName
  let monsterName = 'Ghost'

  //declare a variable named monsterHealth and set it equal to the number value 15
  let monsterHealth = 15
//random integer function 
//see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function randomNum(min, max) {
  //return a random integer between min - max
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min) // The maximum is exclusive and the minimum is inclusive
}
console.log(Math.random)

function playerAttack(){
//use randomNum to generate attack points value between 1 - 5 and save the value to a variable named playerAttackPoints
function randomNum(min,max){
  return Math.floor(Math.random() * (max-min + 1)+ min)
}

 playerAttackPoints = randomNum(1,5)
console.log(playerAttackPoints)

//subtract playerAttackPoints from monsterHealth and update the monsterHealth variable
  let playerAttackPoints = 
   monsterHealth = 15
  console.log(playerAttackPoints - 15)


  //use an alert with string template literals to tell the player: 
  // 1. player attacked monster 
  alert (`player attacked monster`)
  // 2. how much damage the player did 
  alert(`how much damage the player did`)
  // 3. how much health the monster has 
  alert(`how much health the monster has`)
}

function monsterAttack(){
  //use randomNum to generate attack points value between 1 - 5 and save the value to a variable named monsterAttackPoints
function randomNum(min,max){
  return Math.floor(Math.random() * (max-min + 1) + min)
}
 monsterAttackPoints = randomNum(1,5)
console.log(monsterAttackPoints)
  //subtract monsterAttackPoints from playerHealth and update the playerHealth variable 
let monsterAttackPoints = 
 playerHealth = 15
console.log(monsterAttackPoints - 15)


  //use an alert with string template literals to tell the player: 
  // 1. monster attacked player 
  alert(`monster attacked player`)
  // 2. how much damage the monster did 
  alert(`how much damage the monster did`)
  // 3. how much health the player has 
  alert(`how much health the player has`)
}

function playRound() {
  //use randomNum to return either 0 or 1
  function randomNum(max){
    return Math.floor(Math.random() * max)
  }
  console.log(randomNum)


  //0 = player goes first, 1 = monster goes first
  
  //use if/else to determine who goes first

  //if player goes first, run playerAttack, then if monsterHealth > 0, run monsterAttack
  let playerGoesFirst = 0
  let monsterGoesFirst = 1
  let monsterHealth = 15
  let playerHealth = 15
  
  if(playerGoesFirst){
    console.log("playerAttack")
  }
  else(monsterHealth > 0)
    console.log("monsterAttack") 
  
}
  //if monster goes first, run monsterAttack, then if playerHealth > 0, run playerAttack 
  let playerGoesFirst = 0
  let monsterGoesFirst = 1
  let monsterHealth = 15
  let playerHealth = 15

  if(monsterGoesFirst){
    console.log("monsterAttack")
  }
  else(playerHealth > 0)
  console.log("playerAttack")


function playGame() {
  //beginning game message
  alert(
    `Hello, ${playerName}! You are fighting ${monsterName}! Your health is at ${playerHealth}, ${monsterName}'s health is at ${monsterHealth}`
  );

 let roundNumber = 0

  //while loop that runs until player or monster's health is <= 0 
  //add the condition in the while loop parentheses 
  while(playerHealth <= 0){
    roundNumber++
   //write an alert statement that tells the player what round number it is, and the player's and monster's current health points
    alert(
      `Hello, ${playerName}! You are fighting ${monsterName}. You are in ${playRound}. Your health is at ${playerHealth}, ${monsterName}'s health is at ${monsterHealth} `
    )
   //call playRound inside the while loop
    while(playRound <= 0){
    }
  }
  //outside of while loop, declare a winner and use alert to show a win or lose message 
}while(playRound > 0){
  if(playerAttackPoints = 0){
    alert(`${playerName} You won!`)
  } else{
    alert(`${playerName} You lose!`)
  }
}
 else if(playRound > 0){
 if(monsterAttackPoints = 0) {
  alert(`${monsterName} You won!`)
 } else{
  alert(`${monsterName} You lose!`)
 }
}

//call playGame to start game
let playGame = alert(`Start Game`)