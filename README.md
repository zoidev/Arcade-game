# Arcade Game
In this game there are a Player and the Enemies (Bugs). The goal of the player is to reach the water, without colliding into any one of the enemies. The player can move left, right, up and down. The enemies move in varying speeds on the paved block portion of the scene. Once the player collides with an enemy, the player moves back to the start square and when the collisions are equal to 3 the game is over. Each time the player reaches the water the score increases by 100, and the win condition is the 1000 points.

Udacity provided the vizual assets and a game loop engine and I added the rest functionality. 
## Live Demo 
https://zoidev.github.io/Arcade-game/
## Installing
- Clone the repository or download the zip folder of the project 
- Open the file ```index.html``` in your browser (Chrome is recommended)

## How to play
  - Use the arrows keys to navigate the game
  - Press "up" or "down" arrows keys to move one box up or down.
  - Press "left" or "right arrow keys to move one box left or right.
  - You cannot move outside the game area.
  - if you touch the water you collect **100 points** and return to start position. 
  - when you collect **1000 points** you WIN.
  - The goal is to avoid the enemies and touch the water 10 times.
  - **If you collide with enemy you loose 1 life (You only have 3 lives)**
When you win or lose a pop-up window shows up and you can "PLAY AGAIN"

## Files
Starter code was provided by Udacity 
  - engine.js
  - resources.js
  - app.js

I modified the:

  - index.html
  - app.css
  - app.js
  - README.md

## Development
The challenging part of the game was the collisions detection, which was based on the Seperated Anxis Theorem (SAT). A helpful source to grasp the idea of it is this video: <https://www.youtube.com/watch?v=Ap5eBYKlGDo> by Hilze Vonck.
There is a constructor function for the creation of Enemy and some methods (update & render) which have been added to the Enemy's prototype object in order to leverage the inheritance. Collisions detections is defined inside the enemy update function.
Following the same logic there is a constructor for the Player. Player has also the *HandleInput* function which defines the moves of the player according to key input and ensures that it stays inside the canvas. In this function is also defined the way the points are collected and the win condition.




