class Bob{
   constructor(x,y,color){
     var options={
         restitution:1,
         friction: 1,
         frictionAir: 0.0,
         slop:1,
         inertia: infinity
     };
     this.body = Bodies.rectange(x,y,40,40,options);
     this.x = x;
     this.y = y;
     this.color = color;
     word.add(world,this.body);
   }
    display(){
      var angle = this.body.angle;
      var pos = this.body.position;
      push();
      translate(pos.x,pos.y)
      rotate(angle);
      noStroke();
      fill(this.color);
      ellipse(0,0,60,60);
      pop();
     }

}