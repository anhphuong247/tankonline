
var context;
var wallBricks= new Array();
var wallSteel=  new Array();
var wallWater= new Array();
var Trees=new Array();
var play;
window.onload=function() {
    var canvas = document.createElement("canvas");
    context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);
    gameStart();
    setInterval(gameLoop, 17);

};


//var bulletArray=new Array();
function  gameUpdate() {
    play.update();
    //for(var i = 0;i < bulletArray.length;i++)bulletArray[i].update();
    play.BulletandBrick();
    for(var i=0;i<wallWater.length;i++){
        wallWater[i].update();
    }
}

var gameLoop = function (){
    gameUpdate();
    gameDrawer(context);

};

function gameStart() {
    play=new Tank(100,100);


};
var mapWidth=40;
var mapHeight=40;


for(var i =0; i<mapHeight; i++){
    for(var j=0; j<mapHeight; j++){
        if (map[i * mapWidth + j] === 1){
          var wallbrick= new WallBricks(j,i);
          wallBricks.push(wallbrick);
       }
        if (map[i * mapWidth + j] === 2){
            var wall = new WallSteel(j,i);
           wallSteel.push(wall);
       }
       if (map[i * mapWidth + j] === 3){
            var water = new Water(j,i);
           wallWater.push(water);
       }
        if(map [i * mapWidth +j] === 4){
            var tree= new Tree(j,i);
            Trees.push(tree);
        }
    }
}
function gameDrawer(context) {
    context.fillStyle = "black";
    context.fillRect(0,0,window.innerWidth,window.innerHeight);
    play.draw(context);

    //for(var i=0;i < bulletArray.length;i++)bulletArray[i].draw(context)
    //wall
    for(var i =0;  i < wallBricks.length; i++){
       wallBricks[i].draw(context);
   }
    for(var i =0; i < wallSteel.length; i++){
       wallSteel[i].draw(context);
    }
    for(var i =0; i<wallWater.length; i++){
        wallWater[i].draw(context);

    }
   
    for(var i=0;i<Trees.length;i++){
        Trees[i].draw(context);
    }

};
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
            play.shoot();
            break;
    }

}
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
                play.speedY = 0;
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
}
