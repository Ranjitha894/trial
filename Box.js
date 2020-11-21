class Box
{
constructor(x,y,width,height)
{
    this.width = width;
    this.height = height;
    var body_options ={restitution:1};
    this.body = Bodies.rectangle(x,y,width,height,body_options);
    World.add(myWorld,this.body);

}
display()
{
    var pos = this.body.position;
    rectMode(CENTER);
    rect(pos.x,pos.y,this.width,this.height);
}

}