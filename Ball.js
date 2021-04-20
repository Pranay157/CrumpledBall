class Ball {
    constructor(x, y) {
      var options = { 
        density: 1, 
        restitution:0.1,
        friction: 1
      };
         
      this.body = Bodies.circle(x, y, 20, options);
      
      World.add(world, this.body);
    }
  
    display() {
      //var angle = this.body.angle;
     // push();
      //translate(this.body.position.x, this.body.position.y);
      //rotate(angle);
     // ellipseMode(radius)
      fill("red");
      ellipseMode(RADIUS)
      ellipse(this.body.position.x,this.body.position.y,20,20);
      //pop();
    }
  }
  