//Create variables here
var dog, happyDog, database, food, foodStock, dogImage, happyDogImage, foodS

function preload()
{
  dogImage = loadImage("images/dogImg.png");
  happyDogImage = loadImage("images/happyDogImg.png");
	//load images here
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);
  
  dog = createSprite(250,300,150,150);
  dog.addImage(dogImage);
  dog.scale = 0.15;

  foodStock = database.ref('food')
  foodStock.on("value", readStock);
  textSize(20);

}


function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW)) {
  writeStock(foodS);
  dog.addImage(happyDogImage)
}
  drawSprites();

  text("Food Remaining:" + foodS, 20, 30);
  text("Press Up Arrow To Make The Dog Happy", 20, 60);
  fill(255,255,254);
  //add styles here

}

function readStock(data) {
foodS=data.val();
}

function writeStock(x) {

  if(x<=0){
    x = 0;
  } else{
    x = x-1;
  }
  database.ref('/').update({
    Food:x
  })
}

