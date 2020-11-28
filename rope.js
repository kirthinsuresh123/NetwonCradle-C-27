class Rope{
    constructor(body1, body2,offsetX,offsetY){
        this.offsetX = offsetX
        this.offsetY = offsetY

        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB:{x:this.offsetX,y:this.offsetY}
 
        }
       

        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    

    display(){
     
       
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.bodyB.position;
         

          
            stroke("#5BBAD6");
            var anchor1x = pointA.x
            var anchor1y = pointA.y

            var anchor2x = pointB.x+this.offsetX
            
            var anchor2y = pointB.y+this.offsetY
            
                strokeWeight(3);
                line(anchor1x,anchor1y,anchor2x,anchor2y);
               
    }
    
}