class Papel1{

    constructor( x,y,r)
    {

        var options={

            restitution:0.5,
            friction:0.8,
            density:1.0

        }

        this.x=x;
        this.y=y;
        this.r=r;

        this.image=loadImage("paper.png");

        this.body=Bodies.circle(this.x,this.y,(this.r-20)/2,options);


        World.add(world,this.body);

    }

    display(){
  var post= this.body.position;
  push();

  translate (post.x,post.y);
  imageMode (CENTER);

  image(this.image,0,0,this.r,this.r);

  pop();

 
    }

}