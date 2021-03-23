const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var maxdrops =100;
var man;
var thunder1,thunder2,thunder3,thunder4;
var drops=[];
var rand;
function preload(){
    thunder1 =loadImage("1.png");
    thunder2 =loadImage("2.png");
    thunder3 =loadImage("3.png");
    thunder4 =loadImage("4.png");
}

function setup(){
    canvas = createCanvas(400,800);
    engine = Engine.create();
    world = engine.world;
     
    
    for(var i = 0 ;i<maxdrops ; i++){
     drops.push(new Drop(random(0,400),random(0,400),5,5));
    }
    man = new Umbrella(200,650,500,500)
rand = Math.round(random(1,4))
console.log(rand)
if(frameCount%80===0){
    
thunderCreatedFrame=frameCount;
thunder = createSprite(random(10,370),random(10,30),10,10);
switch(rand){
case 1:thunder.addImage(thunder1);
break;
case 2: thunder.addImage(thunder2);
break;
case 3: thunder.addImage(thunder3);
break;
case 4: thunder.addImage(thunder4);
default: break;
}
thunder.scale =random(0.3,0.6)
}





}

function draw(){
    
    background(0);
   Engine.update(engine);
    for(var i = 0 ;i<maxdrops ; i++){

       drops[i].display();
       drops[i].set(); 
           }
        
       man.display();
} 
