var intro_daniel;
var daniel;
var d_walk;
var w,h;
var b_set;
var ob1,ob2,ob3,ob4;
var next_arrow;
var gameState;
var ob1_a,ob2_a,ob3_a,ob4_a;
var cave;
var cave_home;
var first_b, start;

function preload(){
  daniel = createImg("Images/Man Walking.gif");
  b_set = loadImage("Images/Jungle.jpg");
  ob1 = loadImage("Images/Obstacle 1.jpg");
  ob2 = loadImage("Images/Obstacle 2.jpg");
  ob3 = loadImage("Images/Obstacle 3.jpg");
  ob4 = loadImage("Images/Obstacle 4.jpg");
  cave = loadImage("Images/Cave to home.jpg");
  first_b = loadImage("Images/Start background.jpg");
}

function setup() { 
  createCanvas(displayWidth-60,displayHeight-150); 
  intro_daniel = new Intro();
  start = new Play();
  gameState=0;
  daniel.position(200,100);
  w=daniel.width;
  h=daniel.height;
  console.log("Hello");
  daniel.size(w/2, h/2);
  console.log(w);
  console.log(h);
  
  } 
  
  function draw() { 
    if (gameState===0){
      background(first_b);
      //intro_daniel.next.hide();
      start.play();
      start.p.mousePressed(function to(){
        gameState=1;
      });
    }
    else if(gameState===1){
      background(b_set);
      start.p.hide();
      start.headline.hide();
      intro_daniel.next.mousePressed(function change(){
        gameState=2;
      });
      intro_daniel.story();
    }
    else if(gameState===2){
     intro_daniel.next.hide();
     intro_daniel.about_daniel.hide();
     background(b_set);
    }   
    drawSprites();
    //console.log(mouseY);
  }

    