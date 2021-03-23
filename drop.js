class Drop {

  constructor(x,y){
  var options={
      isStatic:false,
      
  }
  
  this.radius=5;
  this.body=Bodies.circle(x,y,2,options);
  World.add(world,this.body);
  }
set(){
if(this.body.position.y>800){
    Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)})

    }
}
  display(){
      var pos= this.body.position;
      push();
      fill("cyan");
      ellipseMode(RADIUS);
      ellipse(pos.x,pos.y,2,2);
      pop();
  
  }
  }
  