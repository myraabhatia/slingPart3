class Ball{
    constructor(x,y,width,height) {
     
      this.body = Bodies.rectangle(x,y,width,height);
      this.width = width; 
      this.height = height;
      this.x = mouseX;
      this.y = mouseX;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.x = mouseX
      pos.y = mouseY
      rectMode(CENTER);
      fill("yellow");
    rect(pos.x, pos.y, this.width,this.height);
    }
  };