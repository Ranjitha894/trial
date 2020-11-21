class Box_modified
{
constructor(x,y,width,height)
{
this.width = width;
this.height = height;
var body_options = {restitution : 1};
this.body = Bodies.rectangle(x,y,width,height,body_options);
World.add(myWorld,this.body);

}

display()
{
var pos = this.body.position;
var angle = this.body.angle;
push();
//translate(pos.x,pos.y);
//rotate(angle);
rectMode(CENTER);
rect(pos.x,pos.y,this.width,this.height);
pop();

}

}