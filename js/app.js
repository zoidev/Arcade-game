var score = 0;
var score_panel = document.getElementById('score-box');
score_panel.innerHTML = 'Score:' + score; //load score for the beginning
// Enemies our player must avoid
var Enemy = function(x,y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images 
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = getRandomInt(80, 170);
};
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers
    this.x += this.speed*dt;
    //enemies should display again from the beggining when move over canvas
    if (this.x > 505) {
      this.x = -202;
    };
    //check collisions
    if ((player.x < this.x + 70 && this.x < player.x + 70)&&(this.y < player.y + 50 && this.y + 50 > player.y)){
   	player.x = 202;
   	player.y = 415;
   	player.lives--;
   	//the player has only 3 lives and then start from scratch
	   	if (player.lives === 0){
	   		modalLoser.style.display = 'block';
	   		reset();
	   	}
   };
};
// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function(x,y) {
	this.sprite = 'images/char-boy.png';
	this.x = x;
  	this.y = y;
  	this.lives = 3;
};
Player.prototype.update = function() {
    this.speedX = 101;
    this.speedY = 87;
};
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Player.prototype.handleInput = function(key) {
	//speedX, speedY defines how much the player can move after one click
	switch (key) {
    case 'left':  // Left arrow was pressed 
  		if (this.x - this.speedX >= 0){ 
        this.x -= this.speedX;
      }
      break;
    case 'up':  // Up arrow was pressed 
  		if (this.y - this.speedY >= -30){ 
        this.y -= this.speedY;
      }
      break;
    case 'right':  // Right arrow was pressed 
  		if (this.x + this.speedX < 505){ 
        this.x += this.speedX;
      }
      break;
    case 'down':  // Down arrow was pressed 
  		if (this.y + this.speedY < 500){ 
        this.y += this.speedY;
      }
      break;
  	}; 
    //if touches the water should return to start position
    var dist = this.y - this.speedY;
    if (dist <= -30){
    	player.x = 202;
    	player.y = 415;
    	score += 100;
    	score_panel.innerHTML = 'Score:' + score;
    	//if player collects 1000 points win 
    	if (score === 1000){
    		modalWinner.style.display = 'block';
    		reset();
    	}
    };   
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var player = new Player(202,415);
var enemy1 = new Enemy(-101,70);
var enemy2 = new Enemy(-250,150);
var enemy3 = new Enemy(-101,220);
var allEnemies = [enemy1, enemy2 , enemy3];

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
// This returns a random integer between the specified values (from MDN)
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
};
function reset() {
   player.lives = 3; 
   score = 0; 
   score_panel.innerHTML = "Score: " + 0;
};
function closeModal(){
	modalLoser.style.display = 'none';
	modalWinner.style.display = 'none';

};
document.getElementById('playAgain').addEventListener('click', closeModal);
document.getElementById('playAgainWin').addEventListener('click', closeModal);