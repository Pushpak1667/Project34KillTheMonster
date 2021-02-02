class Superman{

constructor(x,y,r){
  var options = {
   isStatic : false,
   restitution : 0.3,
   friction : 0.5,
   density : 1.2  
    }

  this.body = Bodies.circle(x,y, r, options);
  this.r = r;
  this.image = loadImage("Superhero-01.png")
  World.add(world, this.body);

}
    display(){
        push();
        var angle = this.body.angle;
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image ,0,0,this.r,this.r);
        pop();
    }

}