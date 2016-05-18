/**
 * Created by Kuro on 16-May-16.
 */
class Tank {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.speedX = 0;
        this.speedY = 0;
        this.sprite = new Image();
        this.sprite.src = "images/tank_armor_up_c0_t1.png";
        this.spriteUp = new Image();
        this.spriteUp.src = "images/tank_armor_up_c0_t1.png";
        this.spriteDown = new Image();
        this.spriteDown.src = "images/tank_armor_down_c0_t1.png";
        this.spriteLeft = new Image();
        this.spriteLeft.src = "images/tank_armor_left_c0_t1.png";
        this.spriteRight = new Image();
        this.spriteRight.src = "images/tank_armor_right_c0_t1.png";
        this.direction = 1; 
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
    }
    draw(context) {
        context.drawImage(this.sprite, this.x, this.y);
    }
    move(direction) {
        switch (direction) {
            case 1://Move up
                this.speedY = -3;
                this.speedX = 0;
                this.sprite = this.spriteUp;
                this.direction = direction;
                break;
            case 2://Move down
                this.speedY = 3;
                this.speedX = 0;
                this.sprite = this.spriteDown;
                this.direction = direction;
                break;
            case 3://Move left
                this.speedX = -3;
                this.speedY = 0;
                this.sprite = this.spriteLeft;
                this.direction = direction;
                break;
            case 4://Move right
                this.speedX = 3;
                this.speedY = 0;
                this.sprite = this.spriteRight;
                this.direction = direction;
                break;
        }
    }
}