let x = 25;
let y =10
let canvasWidth = 500;
let canvasHeight = 300;
let Width = 100;
let Height = 75;
let points = [];
let yPos = 0;
let xPos = 0;
let numDrops = 100;

function Rain (){
 /* fill(225);
  circle(x, y, 5 );
    y += 4;*/
  for (let point in points){
   ellipse(points[point].xPos, points[point].yPos, 5, 5);
  points[point].yPos += 5;
  if(points[point].yPos > canvasHeight){
   points[point].yPos = 0;
 points[point].xPos = random(0, canvasWidth);
   }
 }
}

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  colorMode(HSB);
   /* x = random(0, canvasWidth-Width);*/
    for(let i = 0; i < numDrops; i++){
      xPos = random(0, canvasWidth);
      yPos = random(0, -1 * canvasHeight);
      points.push({yPos: yPos, xPos: xPos});
  }

}

function draw() {
    background(0, 0, 0, 0.653);
  Rain()
  console.log(points.length);
  /*if (y > width + 25) {
      x = random(0, canvasWidth-Width);
      y = random(0, canvasWidth-Width);
      y = -25;
    }*/

      
   
}
 


/*  ` 
        textSize(75)
    text("(👉ﾟヮﾟ)👉", 100, 170) 
    */

    /*
    let img;
let xPos;
let yPos;
let xSpeed = 1;
let ySpeed = 1;
let imgWidth = 100;
let imgHeight = 75;
let canvasWidth = 500;
let canvasHeight = 300;


function preload(){
    img = loadImage('./images/dvd.png');
}

function setup(){
    createCanvas(500, 300);
    xPos = random(0, canvasWidth-imgWidth);
    yPos = random(0, canvasHeight-imgHeight);
}

function draw() {
    background(145, 7, 132);
    image(img, xPos, yPos, imgWidth, imgHeight);
    xPos += xSpeed;
    yPos += ySpeed;
    if (xPos > canvasWidth-imgWidth || xPos < 0){
        xSpeed *= -1;
    }
    if(yPos > canvasHeight-imgHeight || yPos < 0){
        ySpeed *= -1;
    }
}
*/