var rabbit,rabbitImg
var carrot,carrotImg,carrotGroup
var garden,gardenImg
var banana,bananaImg,bananaGroup
var apple,appleImg,appleGroup
var poison,poisonGroup,poisonImg
var gameoverImg
var stamina=0

//Game States
var PLAY=1;
var END=0;
var gameState=1;



function preload(){
    rabbit=loadAnimation("rabbit.jpg")
    garden=loadImage("garden.jpg")
    poison=loadImage("poison.jpg")
    carrot=loadImage("carrot.jpg")
    apple=loadImage("apple.jpg")
    banana=loadImage("banana.jpg")
    gameoverImg = loadImage("game over.jpg")
    
}

function setup() {
    createCanvas(400,600)
    
garden=createSprite(200,200);
garden.addImage(garden.jpg);
garden.velocityY = 4;
    
rabbit= createSprite(70,580,20,20);
rabbit.addAnimation(rabbit.jpg);
rabbit.scale=0.08;
  

gameover = createSprite(300,100);
gameover.addImage(gameoverImg);


gameOver.scale = 0.5;



 carrotGroup=new Group()
 bananaGroup=new Group()
 appleGroup=new Group()
 poisonGroup=new Group()
}

function draw() {
    if(gameState===PLAY){
        background(0);
        rabbit.x = World.mouseX;
        
        edges= createEdgeSprites();
        rabbit.collide(edges);
        
    
        if(garden.y > 400 ){
          garden.y = height/2;
        }
        
        gameover.visible = false;

          createapple();
          createbanana();
          createcarrot();
          createpoison();
      
          if (appleGroup.isTouching(rabbit)) {
            appleGroup.destroyEach();
            stamina=stamina+1000;
          }
          else if (bananaGroup.isTouching(rabbit)) {
           bananaGroup.destroyEach();
            stamina=stamina+1000;
            
          }else if(carrot.isTouching(rabbit)) {
            carrotGroup.destroyEach();
            stamina=stamina+1000;
          }else{
            if(poisonGroup.isTouching(rabbit)) {
              gameState=END;
             
            }
          
           if (gameState===END){
            rabbit.x=width/2;
           rabbit.y=height/2;
            rabbit.scale=0.6;
            
            appleGroup.destroyEach();
            bananaGroup.destroyEach();
            carrotGroup.destroyEach();
            poisonGroup.destroyEach();
            
           appleGroup.setVelocityYEach(0);
            bananaGroup.setVelocityYEach(0);
            carrotGroup.setVelocityYEach(0);
           poisonGroup.setVelocityYEach(0);

           text("game over",200,200)
           fill("red")
           stroke("red")
           textSize(34)
           
           gameOver.visible = true;
           restart.visible = true;
          }

          if(mousePressedOver(restart)) {
            reset();
          }

          function reset(){
            gameState=PLAY
            restart.visible=false
            gameover.visible=false
            poisonGroup.destroyEach()
            carrotGroup.destroyEach()
            appleGroup.destroyEach()
            bananaGroup.destroyEach()
            stamina=0
          
          }
              


        }  
        
     
      }
      drawSprites();
      textSize(20);
      fill(255);
      text("stamina: "+ stamina,350,30);
      }
    
    
    
    function createapple() {
      if (World.frameCount % 200 == 0) {
       
        var apple = createSprite(Math.round(random(50, 350),40, 10, 10));
        apple.addImage(apple.jpg);
      apple.scale=0.12;
      apple.velocityY = 5;
      apple.lifetime = 200;
      appleGroup.add(apple);
      }
    }
    
    function createbanana() {
      if (World.frameCount % 320 == 0) {
          
    
        var banana = createSprite(Math.round(random(50, 350),40, 10, 10));
        banana.addImage(banana.jpg);
     banana.scale=0.03;
     banana.velocityY = 5;
      banana.lifetime = 200;
      bananaGroup.add(banana);
    }
    }
    
    function createcarrot() {
      if (World.frameCount % 410 == 0) {
      
    
        var carrot = createSprite(Math.round(random(50, 350),40, 10, 10));
       carrot.addImage(carrot.jpg);
     carrot.scale=0.13;
      carrot.velocityY = 5;
      carrot.lifetime = 200;
     carrotGroup.add(carrot);
      }
    }
    
    function createpoison(){
      if (World.frameCount % 530 == 0) {
       
    
        var poison= createSprite(Math.round(random(50,350),40, 10, 10));
        poison.addImage(poisonImg);
      poison.scale=0.1;
      poison.velocityY = 4;
      poison.lifetime = 200;
     poisonGroup.add(poison);
      }
    }
   
    
