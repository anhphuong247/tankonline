/**
 * Created by Administrator on 22/05/2016.
 */
class Animation{
    constructor(x,y,name,number,speed) {
        this.x = x;
        this.y = y;
        this.cout=0;
        this.speed=speed;
        this.sprite = new Array();
       this.coutFrame=number;
        this.index = 0;
        for (var i = 1; i <= number; i++) {
            var image = new Image();
            var dir = "images/" + name + i + ".png";
            image.src = dir;
            this.sprite.push(image);

        }
    }
         update(x,y){
             this.x=x;
             this.y=y;
             this.cout++;
             if(this.cout>=this.speed) {
                 
                 this.index++;
                 this.cout=0;
                 this.index = this.index % this.coutFrame;
             }
                 
             
         }
        draw(context){
            context.drawImage(this.sprite[this.index],this.x,this.y);
        }

    }

