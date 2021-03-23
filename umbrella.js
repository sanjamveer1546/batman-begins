class Umbrella {

    constructor(x,y){
    var options={
        isStatic:true,
        length:20,
        restitution:1,
        friction:0,
        density:0.3
    }
    
    this.radius=1005;
    this.body=Bodies.circle(x,y,100,options);
    
    this.image = loadImage("walking_1.png");
    World.add(world,this.body);
    }
    display(){
        var pos= this.body.position;
        push();
        fill("black")
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,100,100);
        imageMode(CENTER);
        
        image(this.image,pos.x,pos.y,350,250 );
        pop();
    
    }
    }
