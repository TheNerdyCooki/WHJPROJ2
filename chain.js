class chain{
    //constructor(bodyA, pointB){
    //We are using and the values are to be given from sketch.js thus add Offset in the constructor 
    //It is not bodyA and bodyB inside the constructor, they are the properties of your constraint, you named the values of bodyA and bodyB as body1 and body2 and hence use the same ones in your constructor for calling them. 
    constructor(body1, body2, offsetX, offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB:{x:this.offsetX, y:this.offsetY}
        }
        //this.pointB = pointB
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }


    display(){
            var pointA = this.chain.bodyA.position;
            var pointB = this.chain.bodyB.position;
          //  var pointB = this.pointB;
            push();
           line(pointA.x, pointA.y, pointB.x+this.offsetX, pointB.y+this.offsetY);
          // line(pointA.x-25, pointA.y, pointB.x+30, pointB.y);
           pop();
        
    }
    
}