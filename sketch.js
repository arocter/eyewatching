var gridlist = [];
var space = 100;
var set;
var img1_1,img1_2, img1_3,img1_4,img1_5,img2_1,img2_2,img2_3,img2_4,img2_5,img3_1,img3_2,img3_3,img3_4,img3_5,img4_1,img4_2,img4_3,img4_4,img4_5,img5_1,img5_2,img5_3,img5_4,img5_5;

function preload(){
  img1_1 = loadImage("assets/sliced/5.jpg");
  img1_2 = loadImage("assets/sliced/4.jpg");
  img1_3 = loadImage("assets/sliced/3.jpg");
  img1_4 = loadImage("assets/sliced/2.jpg");
  img1_5 = loadImage("assets/sliced/1.jpg");
  img2_1 = loadImage("assets/sliced/10.jpg");
  img2_2 = loadImage("assets/sliced/9.jpg");
  img2_3 = loadImage("assets/sliced/8.jpg");
  img2_4 = loadImage("assets/sliced/7.jpg");
  img2_5 = loadImage("assets/sliced/6.jpg");
  img3_1 = loadImage("assets/sliced/15.jpg");
  img3_2 = loadImage("assets/sliced/14.jpg");
  img3_3 = loadImage("assets/sliced/13.jpg");
  img3_4 = loadImage("assets/sliced/12.jpg");
  img3_5 = loadImage("assets/sliced/11.jpg");
  img4_1 = loadImage("assets/sliced/20.jpg");
  img4_2 = loadImage("assets/sliced/19.jpg");
  img4_3 = loadImage("assets/sliced/18.jpg");
  img4_4 = loadImage("assets/sliced/17.jpg");
  img4_5 = loadImage("assets/sliced/16.jpg");
  img5_1 = loadImage("assets/sliced/25.jpg");
  img5_2 = loadImage("assets/sliced/24.jpg");
  img5_3 = loadImage("assets/sliced/23.jpg");
  img5_4 = loadImage("assets/sliced/22.jpg");
  img5_5 = loadImage("assets/sliced/21.jpg");
}

function setup() {
  createCanvas(500,500);
  for(var y=0; y<height; y+=100){
    for(var x=0; x<width; x+=100){
        gridlist.push(new area(x,y,space));
    }
  }
}

function draw() {
  
  for(var y=0; y<height; y+=100){
    for(var x=0; x<width; x+=100){
      if(mouseX>=x && mouseX<x+100 && mouseY>=y && mouseY<y+100){
        set = x/100 + 1 + 5*y/100
      }
    }
  }
  for(var i=0;i<gridlist.length;i++){
    gridlist[i].display2();
  }
  
  switch(set){
    case 1:
      image(img1_1, 0, 0);
      break;
    case 2:
      image(img1_2, 0, 0);
      break;
    case 3:
      image(img1_3, 0, 0);
      break;
    case 4:
      image(img1_4, 0, 0);
      break;
    case 5:
      image(img1_5, 0, 0);
      break;
    case 6:
      image(img2_1, 0, 0);
      break;
    case 7:
      image(img2_2, 0, 0);
      break;
    case 8:
      image(img2_3, 0, 0);
      break;
    case 9:
      image(img2_4, 0, 0);
      break;
    case 10:
      image(img2_5, 0, 0);
      break;
    case 11:
      image(img3_1, 0, 0);
      break;
    case 12:
      image(img3_2, 0, 0);
      break;
    case 13:
      image(img3_3, 0, 0);
      break;
    case 14:
      image(img3_4, 0, 0);
      break;
    case 15:
      image(img3_5, 0, 0);
      break;
    case 16:
      image(img4_1, 0, 0);
      break;  
    case 17:
      image(img4_2, 0, 0);
      break;
    case 18:
      image(img4_3, 0, 0);
      break;
    case 19:
      image(img4_4, 0, 0);
      break;
    case 20:
      image(img4_5, 0, 0);
      break;
    case 21:
      image(img5_1, 0, 0);
      break;
    case 22:
      image(img5_2, 0, 0);
      break;
    case 23:
      image(img5_3, 0, 0);
      break;
    case 24:
      image(img5_4, 0, 0);
      break;  
    case 25:
      image(img5_5, 0, 0);
      break;  
  }
  
}


function seteyes(){
  
}

function area(tempX,tempY,tempW){
  this.x = tempX;
  this.y = tempY;
  this.w = tempW;
}

area.prototype.display2 = function(){
  fill(0,200,0);
  stroke(200,0,0);
  rect(this.x,this.y,this.w,this.w);
}