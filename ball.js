class balls {
    constructor(x,y) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.circle(x, y,20, options);
      this.radius = 20;
      World.add(world, this.body);
    }
    display(){
      
      var pos =this.body.position;
      /*pos.x=mouseX;
      pos.y=mouseY;*/
      push();
      translate(pos.x, pos.y);
      ellipseMode(RADIUS);
      fill("red");
      ellipse(0, 0, this.radius,this.radius);
      pop();
    }
  };