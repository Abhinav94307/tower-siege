class Launcher { 
     constructor(bodyA, pointB) {
          var options = { 
              bodyA: bodyA,
               pointB: pointB,
                stiffness: 0.04,
                 length: 1 
             } 
  
 //this.bodyA = bodyA;
 this.pointB = pointB; 
 this.launcher1 = Constraint.create(options); 
 World.add(world, this.launcher1); 

 }

  fly() {
       this.launcher1.bodyA = null; 
  }
  display() {
       if (this.launcher1.bodyA) { 
         var pointA = this.launcher1.bodyA.position;
          var pointB = this.pointB;
           strokeWeight(4);
           stroke("turquoise")
          line(pointA.x, pointA.y, pointB.x, pointB.y);
          }
     } 
 }