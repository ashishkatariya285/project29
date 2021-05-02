class rope{
    constructor(bodyA,pointB)
    {
        var options ={ 
        bodyA:bodyA,
        pointB:pointB,
        stiffness: 0.001,
        length: 35,
        }
        this.pointB=pointB;
        this.rope = Constraint.create(options);

        World.add(world, this.rope)
    }
    fly(){
        this.rope.bodyA = null;
    }
    display(){
      var pointA=this.rope.bodyA.position; 
      var pointB=this.pointB; 
      strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x-10,pointB.y );
        line(pointA.x,pointA.y,pointB.x+30,pointB.y-2)
    }
}