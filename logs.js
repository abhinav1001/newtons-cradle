class logs{
    constructor(width,height,options){
        var options={
        'friction':0.5,
        'density':1,
        'restitution':2,
        }
    
        this.height=150;
        this.width=40;
        World.add(world,this.body);
    }
        display(){
         var pos=this.body.position;   
         push()
         rectMode(CENTER)
         fill("yellow");
         rect(x,y, this.width, this.height);
         pop()
        }
    

}