
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
        this.sprite = new Image();
        this.sprite.src = 'images/water_2.png';
    }
    draw(context){
        context.drawImage(this.sprite, this.x, this.y);
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