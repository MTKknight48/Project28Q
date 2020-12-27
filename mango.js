class Mango extends BaseClass {
    constructor(x, y){
        var options={
            isStatic: true,
            restitution:0,
            friction:1
        }
      super(x,y,50,50);
      this.image = loadImage("images/mango.png");
    }
  
  };