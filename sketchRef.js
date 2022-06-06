var bola, database;
var pos;


function setup(){
  database = firebase.database();
  createCanvas(500,500);

  bola = createSprite(250,250,20,20);
  bola.shapeColor = "red";


  var posFB = database.ref('bola/position');
  console.log("DEU " + posFB)
  posFB.on("value", lerPosicaoFb, mostrarErro);
}

function draw(){
  background("black");
  
    if(keyDown(LEFT_ARROW)){
      atualizarPosicaoFb(-10,0);
    }
    else if(keyDown(RIGHT_ARROW)){
      atualizarPosicaoFb(10,0);
    }
    else if(keyDown(UP_ARROW)){
      atualizarPosicaoFb(0,-10);
    }
    else if(keyDown(DOWN_ARROW)){
      atualizarPosicaoFb(0,+10);
    }
    drawSprites();
  
}

function lerPosicaoFb(data){
  pos = data.val();
  bola.x = pos.x;
  bola.y = pos.y;
}

function atualizarPosicaoFb(x, y){
  database.ref('bola/position').set({
    'x': pos.x + x ,
    'y': pos.y + y
  })
}

function mostrarErro(){
  console.log("Error in writing to the database");
}


