class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.9,
            length: 250
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA = body;
    }
    

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(48,22,8);
            if(pointA.x < 220) {
                strokeWeight(20);
                line(400, 50, 700, 50);
                strokeWeight(7);
                line(pointA.x - -1, pointA.y, pointB.x - -10, pointB.y);
            }
            else{
                strokeWeight(20);
                line(400, 50, 700, 50);
                strokeWeight(7);
                line(pointA.x - -1, pointA.y, pointB.x - -10, pointB.y);
                line(pointA.x - -1, pointA.y, pointB.x - -10, pointB.y);
            }
           
            
            pop();
        }
    }
    
}