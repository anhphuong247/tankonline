/**
 * Created by Administrator on 16/05/2016.
 */
var context;
window.onload=function() {
    var canvas = document.createElement("canvas");
    context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);
    gameStart();
    setInterval(gameLoop, 17);
};

var play;
var playBullet;
function  gameUpdate() {
    play.update();
    playBullet.update();
}

var gameLoop = function (){
    gameUpdate();
    gameDrawer(context);

};

function gameStart() {
    play=new Tank(100,100);
    playBullet=new Bullet(0,0,1);

};

function gameDrawer(context) {
    context.fillStyle = "black";
    context.fillRect(0,0,window.innerWidth,window.innerHeight);
    play.draw(context);
    playBullet.draw(context);

}
  window.onkeydown=function (e)
  {
    switch (e.keyCode){
        case 65://a
            play.move(3);
            break;
        case 68://D

            play.move(4);
            break;
        case 83://s

            play.move(2);
            break;
        case 87://w
            play.move(1);
            break;
        case 32://space

            playBullet.x=play.x;
            playBullet.y = play.y;
            playBullet.move(play.direction);
            break;
    }

};
window.onkeyup=function (e) {
    switch (e.keyCode){
        case 87://w
            if(play.speedY < 0){
                play.speedY = 0;
                play.sprite = play.spriteUp;
            }
            break;
        case 83://s
            if(play.speedY > 0){
                play.speedy = 0;
                play.sprite = play.spriteDown;
            }
        case 65://a
          if(play.speedX < 0){
              play.speedX = 0;
              play.sprite = play.spriteLeft;
          }
            break;
        case 68://D
           if(play.speedX > 0){
               play.speedX = 0;
               play.sprite = play.spriteRight;
           }
            break;




    }
};