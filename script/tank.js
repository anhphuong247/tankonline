/**
 * Created by Kuro on 16-May-16.
 */
class Tank {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.speedX = 0;
        this.speedY = 0;
        this.spriteUp = new Animation(this.x,this.y,"tank_armor_up_c0_t",2,17);

        this.spriteDown = new Animation(this.x,this.y,"tank_armor_down_c0_t",2,17);

        this.spriteLeft =new Animation(this.x,this.y,"tank_armor_left_c0_t",2,17);

        this.spriteRight =new Animation(this.x,this.y,"tank_armor_right_c0_t",2,17);
        this.sprite = this.spriteDown;

        this.direction = 1;
        this.bullet=new Array();
        this.oneBullet=1;
    }

    checkCollistion(rect1, rect2) {
        if (rect1.x < rect2.x + rect2.width &&
            rect1.x + rect1.width > rect2.x &&
            rect1.y < rect2.y + rect2.height &&
            rect1.height + rect1.y > rect2.y) {
            return true;
        }
        return false;
    }


    update() {
        var ismove = true;


        for(var i=0; i< this.bullet.length; i++){

            this.bullet[i].update();

        }

        var rect1 = {x: this.x + this.speedX, y: this.y + this.speedY, width: 32, height: 32};

        for (var i = 0; i < wallBricks.length; i++) {
            var rect2 = {x: wallBricks[i].x, y: wallBricks[i].y, width: 16, height: 16};
            if (this.checkCollistion(rect1, rect2) == true) {
                ismove = false;
                break;
            }
        }
        for (var i = 0; i < wallSteel.length; i++) {
            var rect2 = {x: wallSteel[i].x, y: wallSteel[i].y, width: 16, height: 16};
            if (this.checkCollistion(rect1, rect2) == true) {
                ismove = false;
                break;
            }
        }
        for (var i = 0; i < wallWater.length; i++) {
            var rect2 = {x: wallWater[i].x, y: wallWater[i].y, width: 32, height: 32};
            if (this.checkCollistion(rect1, rect2) == true) {
                ismove = false;
                break;
            }
        }
        if (ismove == true) {
            this.x += this.speedX;
            this.y += this.speedY;
        }
        if (this.speedX + this.speedY != 0 ){
            this.sprite.update(this.x, this.y);
        }
    }

    BulletandBrick() {
        for (var i = 0; i < this.bullet.length; i++) {
            var rect1 = {x: this.bullet[i].x, y: this.bullet[i].y, width: 5, height: 5};//bullet
            for (var j = 0; j < wallBricks.length; j++) {
                var rect2 = {x: wallBricks[j].x, y: wallBricks[j].y, width: 16, height: 16};//Brick
                if (this.checkCollistion(rect1, rect2)) {

                    this.bullet.pop();
                    wallBricks.splice(j, 1);
                    break;
                }
            }
        }
        for (var i = 0; i < this.bullet.length; i++) {
            var rect1 = {x: this.bullet[i].x, y: this.bullet[i].y, width: 5, height: 5};//bullet
            for (var j = 0; j < wallSteel.length; j++) {
                var rect2 = {x: wallSteel[j].x, y: wallSteel[j].y, width: 16, height: 16};//streel


                if (this.checkCollistion(rect1, rect2)) {
                    this.bullet.splice(i, 1);
                    break;
                }
            }
        }

    }

    draw(context) {
         this.sprite.draw(context);

        for (var i = 0; i < this.bullet.length; i++) {

            this.bullet[i].draw(context);

        }

    }

    move(direction) {
        switch (direction) {
            case 1://Move up
                if(this.y >=10){
                this.speedY = -3;
                this.speedX = 0;}
                this.sprite = this.spriteUp;
                this.direction = 1;
                break;
            case 2://Move down
                if(this.y <= window.innerHeight - 10){
                this.speedY = 3;
                this.speedX = 0;}
                this.sprite = this.spriteDown;
                this.direction = 2;
                break;
            case 3://Move left
                if(this.x >= 10){
                this.speedX = -3;
                this.speedY = 0;}
                this.sprite = this.spriteLeft;
                this.direction = 3;
                break;
            case 4://Move right
                if (this.x <= window.innerWidth -10){
                this.speedX = 3;
                this.speedY = 0;}
                this.sprite = this.spriteRight;
                this.direction = 4;
                break;
        }
    }

    shoot() {


            var bullets = new Bullet(this.x + 13, this.y + 13, this.direction,this.oneBullet);
            if(this.bullet.length<this.oneBullet){
            this.bullet.push(bullets);}


    }

}