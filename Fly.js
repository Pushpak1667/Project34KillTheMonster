class Fly{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness : 1.2,
            length: 330
        }
       this.pointB = pointB
       this.fly = Constraint.create(options);
       World.add(world,this.fly);

    }
//    fly(){
//        this.fly.bodyA = null;
//    } 
//    attached(body){
//        this.fly.bodyA = body;
//    }
   display(){
       if(this.fly.bodyA){
        var pointA = this.fly.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(0);
        line(pointA.x,pointA.y,pointB.x,pointB.y);   
       }
   }
}