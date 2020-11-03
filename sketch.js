const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine;
var world;

var peg1;
var pegs = [];

var particles = [];

var ground;

var divider1;
var dividers = [];

var score;
var turns;

function setup(){
  createCanvas(700,730);

  engine = Engine.create();
  world = engine.world;

  ground = new box(350, 715, 700, 30, true);

  for(var i = 10; i <= 690; i += 136){
    divider1 = new box(i, 600, 20, 200, true);
    dividers.push(divider1);
  }
  score = 0;
  turns = 1;
  /*I didn't use the following double for loop 
    because I couldn't figure out of to offeset
    the x value of every other row

  for(var x = 30; x <= 675; x += 60){
      for(var y = 50; y <= 450; y += 100){
        peg1 = new peg(x + 20, y, 30, true);
        pegs.push(peg1);
    }
  }*/
  for(var x = 30; x <= 675; x += 60){
    peg1 = new peg(x + 20, 70, 8, true);
    pegs.push(peg1);
  }
  for(var x = 60; x <= 635; x += 60){
    peg1 = new peg(x + 20, 120, 8, true);
    pegs.push(peg1);
  }
  for(var x = 30; x <= 675; x += 60){
    peg1 = new peg(x + 20, 170, 8, true);
    pegs.push(peg1);
  }
  for(var x = 60; x <= 635; x += 60){
    peg1 = new peg(x + 20, 220, 8, true);
    pegs.push(peg1);
  }
  for(var x = 30; x <= 675; x += 60){
    peg1 = new peg(x + 20, 270, 8, true);
    pegs.push(peg1);
  }
  for(var x = 60; x <= 635; x += 60){
    peg1 = new peg(x + 20, 320, 8, true);
    pegs.push(peg1);
  }
  for(var x = 30; x <= 675; x += 60){
    peg1 = new peg(x + 20, 370, 8, true);
    pegs.push(peg1);
  }
  for(var x = 60; x <= 635; x += 60){
    peg1 = new peg(x + 20, 420, 8, true);
    pegs.push(peg1);
  }
  for(var x = 30; x <= 675; x += 60){
    peg1 = new peg(x + 20, 470, 8, true);
    pegs.push(peg1);
  }

  Engine.run(engine);
}

function draw(){
    background(0);
    rectMode(CENTER);
    noStroke();
    //Engine.update(engine);
    /*if(frameCount % 20 === 0){
      //var particle1 = new particle(random(45, 660), -10, 13);
      var particle1 = new particle(mouseX, -10, 13);
      particles.push(particle1);
      }*/
      //if(particles[i]){
        /*if(mouseIsPressed){
          if(frameCount % 20 === 0){
          var particle1 = new particle(mouseX, -10, 13);
          particles.push(particle1);
        }
        }*/
      for(var i = 0; i < particles.length; i++){
        if(particles[i] != null){
        particles[i].display();
        if (particles[i].isOffScreen()){
          particles[i].removeFromWorld();
          particles.splice(i, 1); 
          i--;
      }
    }
      if(particles[i]){
        if(particles[i] != null){
        if(particles[i].body.position.y > 600){

        if(particles[i].body.position.x > 10 && particles[i].body.position.x < 146){
          score += 500;
          particles[i].removeFromWorld();
          particles[i] = null;
          turns++;
        }
        if(particles[i] != null){
        if(particles[i].body.position.x > 146 && particles[i].body.position.x < 282){
          score += 250;
          particles[i].removeFromWorld();
          particles[i] = null;
          turns++;
        }
        }
        if(particles[i] != null){
        if(particles[i].body.position.x > 282 && particles[i].body.position.x < 418){
          score += 50;
          particles[i].removeFromWorld();
          particles[i] = null;
          turns++;
        }
        }
        if(particles[i] != null){
        if(particles[i].body.position.x > 418 && particles[i].body.position.x < 554){
          score += 250;
          particles[i].removeFromWorld();
          particles[i] = null;
          turns++;
        }
        }
        if(particles[i] != null){
        if(particles[i].body.position.x > 554 && particles[i].body.position.x < 690){
          score += 500;
          particles[i].removeFromWorld();
          particles[i] = null;
          turns++;
        }
        }
        }
      }
    }
  }
 // }
    fill(255);
    text("Score: " + score, 50, 40);
    textSize(24);
    text(500, 60, 600);
    text(250, 198, 600);
    text(50, 334, 600);
    text(250, 470, 600);
    text(500, 606, 600);
    if(turns >= 6){
      push();
      textSize(100);
      text("Game Over", 100, 357.5);
      pop();
    }
    for(var i = 0; i < pegs.length; i++){
        pegs[i].display();
    }
    for(var i = 0; i < dividers.length; i++){
      dividers[i].display();
  }
    ground.display();

}

function mousePressed(){
  if(turns <= 5){
  var particle1 = new particle(mouseX, -10, 13);
  particles.push(particle1);
  }
}
