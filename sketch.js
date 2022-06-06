var bola;
var database;
var pos;


function setup(){
  createCanvas(500,500);

  bola = createSprite(250,250,20,20);
  bola.shapeColor = "red";
  
  //01. guardar referencia do FB na variável

  var posFB = database.ref(/* adiciona a referencia da info que quer acessar no FB*/);
  posFB.on("value" /* , nomeFunçãoChamadaQuandoHáMudança, nomeDaFunçãoChamadaSeHouverErro */);
  
}

function draw(){
  background("black");
  
    if(keyDown(LEFT_ARROW)){
      
    }
    if(keyDown(RIGHT_ARROW)){
      
    }
    if(keyDown(UP_ARROW)){
      
    }
    if(keyDown(DOWN_ARROW)){
      
    }
  
    drawSprites();  
}

function lerPosicaoFb(data){
  pos = data.val();
  bola.x = pos.x;
  bola.y = pos.y;
}

function atualizarPosicaoFb(x, y){
  database.ref(/* nome da referencia da info que quer acessar no FB */).set({
    'x': pos.x + x ,
    'y': pos.y + y
  })
}

function mostrarErro(){
  console.log("Erro ao acessar o banco de dados");
}


