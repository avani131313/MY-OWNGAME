var WAIT = 0
var QUESTION = 1
var RESULT = 2
var END = 3
var gameState = WAIT
var question=0, option=0, answer=0
var bg, bgImg
var player, player_flying
var carpet, carpetImg
var genie, genieImg
var instruction, instructionImg
var title, titleImg 

var ghost, ghostImg
var bat, batImg
var box, boxImg
var aladinImg1, aladinImg2, aladin, yasmine
var questionSound,sound1
var point,point1,point2,point3,point4,point5
var questions=["Q1.I am the rare case when today comes before yesterday. What am I?","Q2.I go on red, but stop for green. What am I doing?","Q3.What goes up but never comes down?","Q4.How many months of the year have 28 days?","What can you hold in your left hand but not your right?"]
var options=[["Book","Encyclopedia","Dictionary","Notebook"],["eating a watermelon","drinking a red-green juice","sleeping on a red-green pillow","colouring a book"],["Your clothes","Your face","Your traits","Your age"],["1","2","8","12"],["Left leg","left elbow","right elbow","right leg"]]
var answers=["C-Dicionary","A-Eating a Watermelon","D-Your age","D-12","C-Right elbow"]
var startTime = 0

function preload(){
bgImg = loadImage("assets/bgImg.jpg")
player_flying = loadImage("assets/player.png")

titleImg = loadImage("assets/lamp.png")
instructionImg = loadImage("assets/instruction box.png")
carpetImg = loadAnimation("assets/1.png","assets/2.png","assets/3.png","assets/4.png","assets/5.png","assets/6.png")
genieImg = loadAnimation("assets/genie1.png","assets/genie2.png","assets/genie3.png","assets/genie4.png","assets/genie5.png","assets/genie6.png")
instructionImg = loadImage("assets/instruction.png")
questionSound = loadSound("assets/question.mp3")
boxImg = loadImage("assets/box.png")
point = loadImage("assets/point.png")
aladinImg1 = loadImage("assets/AlladinYasmine1.png")
aladinImg2 = loadImage("assets/AlladinYasmine2.gif")
//batImg = loadImage()
//ghostImg = loadImage()
}

function setup(){
createCanvas(windowWidth,windowHeight)
//background image


bg = createSprite(1000,500);
bg.addImage(bgImg);
bg.scale = 3

aladin = createSprite(windowWidth/2-320,windowHeight/2-300,10,10)
aladin.addImage(aladinImg1)
aladin.scale=0.45

yasmine = createSprite(windowWidth/2+300,windowHeight/2-300,10,10)
yasmine.addImage(aladinImg2)
yasmine.scale=0.45

point1 = createSprite(windowWidth/2-830,windowHeight/2-450,40,40)
point1.addImage(point)
point1.scale=0.5
//point1.visible=false

point2 = createSprite(windowWidth/2-730,windowHeight/2-450,40,40)
point2.addImage(point)
point2.scale=0.5
//point1.visible=false

point3 = createSprite(windowWidth/2-630,windowHeight/2-450,40,40)
point3.addImage(point)
point3.scale=0.5
//point1.visible=false

point4 = createSprite(windowWidth/2-530,windowHeight/2-450,40,40)
point4.addImage(point)
point4.scale=0.5
//point1.visible=false

point5 = createSprite(windowWidth/2-430,windowHeight/2-450,40,40)
point5.addImage(point)
point5.scale=0.5
//point1.visible=false

box = createSprite(windowWidth/2,windowHeight/2+250,10,10)
box.addImage(boxImg)
box.scale=3
//point1.visible=false

player = createSprite(150,500,10,10)
player.addImage(player_flying)
player.scale = 1.5
//point2.visible=false

title = createSprite(windowWidth/2+40,windowHeight/2-350,10,10)
title.addImage(titleImg)
//point3.visible=false

instruction = createSprite(windowWidth/2+10,windowHeight/2-100,10,10)
instruction.addImage(instructionImg)
//point4.visible=false

carpet = createSprite(150,650,10,10)
carpet.addAnimation("flying",carpetImg)
carpet.scale=1.5
//point5.visible=false

genie = createSprite(windowWidth/2+550,windowHeight/2+210,10,10)
genie.addAnimation("genie",genieImg)
genie.scale=3
//point1.visible=false

bg.velocityX = -10

genie.visible=false
box.visible=false



}

function draw() {
  background("black")
  
        drawSprites();
     if(bg.x<800){
       bg.x=1000
     }
     
  if (keyDown("DOWN_ARROW")){
      player.y = player.y+2
      carpet.y = carpet.y+2
  }
  if (keyDown("UP_ARROW")){
     player.y = player.y-2
     carpet.y = carpet.y-2

}
  if(keyDown("LEFT_ARROW")){
    player.x = player.x-2
    carpet.x = carpet.x-2
  }
  if(keyDown("RIGHT_ARROW")){
    player.x = player.x+2
    carpet.x = carpet.x+2
  }
  startTime++
  if(startTime>50){
   gameState = 1
  }
  if(gameState===1){
    genie.visible = true
    box.visible = true
    //sound1.addSound(questionSound)
    textSize(30)
    fill("black")
    textFont("Algeria")
    text(questions[question],windowWidth/2-450,windowHeight/2+160)
    
    textSize(25)
    fill("blue")
    textFont("Algeria")
    text("a:"+options[option][0],windowWidth/2-450,windowHeight/2+220)
    text("b:"+options[option][1],windowWidth/2-450,windowHeight/2+260)
    text("c:"+options[option][2],windowWidth/2-450,windowHeight/2+300)
    text("d:"+options[option][3],windowWidth/2-450,windowHeight/2+340)

    
  }
  
}
function keyPressed()
{
//if(keyCode =  ){
//
//}
}