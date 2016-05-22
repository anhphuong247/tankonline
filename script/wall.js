
class WallBricks{
    constructor(x,y){
        this.x=x * 16;
        this.y=y * 16;
        this.sprite=new Image();
        this.sprite.src="images/wall_brick.png";

    }
    draw(context){
        context.drawImage(this.sprite,this.x,this.y);
    }
}
class WallSteel{
    constructor(x,y){
        this.x=x * 16;
        this.y=y * 16;
        this.sprite=new Image();
        this.sprite.src="images/wall_steel.png";

    }
    draw(context){
        context.drawImage(this.sprite,this.x,this.y);
    }
}
class Water{
    constructor(x,y){
        this.x = x * 16;
        this.y = y * 16;
        this.sprite= new Animation(this.x,this.y, "water_" ,2,17);
    }
    update(){
     this.sprite.update(this.x,this.y); 
    }
    draw(context){
        this.sprite.draw(context);
    }
}
class Tree{
    constructor(x,y){
        this.x=x*16;
        this.y=y*16;
        this.sprite=new Image();
        this.sprite.src='images/trees.png';
    }
    draw(context){
        context.drawImage(this.sprite,this.x,this.y);
    }
}