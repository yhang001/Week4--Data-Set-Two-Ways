/*I kept a record of the times I looked in the mirror during the day, my purpose and feelings. It turns out that I care more about my appearance than I thought!
*/

let mirror;

function setup() {
  createCanvas(600, 600);
  rectMode(CENTER);

  //no animation / interaction chart
  noLoop();
  fetch("./json/mirror.json").then(function(response) {
    return response.json();
  }).then(function(data) {

    console.log(data);
    
    mirror = data.mirror;

    //using no Loop? you can just call your function once the data is loaded
    drawChart();
  
  }).catch(function(err) {
    console.log(`Something went wrong: ${err}`);
  });

}

function draw() {
  background(255,251,235,50);
  
  drawInstruction();
  
  fill(0,150);
  textSize(50);
  textAlign(CENTER);
  textFont('Georgia');
  text("Mirror",width/2,90);
    
}

function drawChart(){

  //spacing between the bars
  let spacing = 10;
  
  for (let i=0; i<mirror.length; i++) {

     let item = mirror[i];
  
     let rWidth = width/(mirror.length+25); //add 2 so there is space either side of the chart
     let rX = map(i, 0, mirror.length, rWidth, width-rWidth); //map range includes the space on either side
     let rY = height/2; 
  //let rHeight = 0-map(item.amount, 0, maxval, 0, height-(rWidth*2));
     let rHeight = item.height*2;
     
     noStroke(); 
     fill(item.color);
     rect(rX+spacing/2, rY, rWidth-spacing, rHeight);
    
    
     fill(255,251,235);
     stroke(item.color);
     strokeWeight(rWidth);
     
     if (item.radius !=2 ){
        circle(rX+spacing/2, rY-rHeight/2,item.radius);
     }else{
        circle(rX+spacing/2, rY+rHeight/2,item.radius);
     }
   }
}

function drawInstruction(){
  
  push()
  translate(width/2-70,20);
  noStroke();
  
  // the fist one
  fill(248,203,91);
  rect(100,height-105,10,10);
  
  fill(0,150);
  rect(80,height-75,30,2);
  circle(100, height-45,15);
  
  text("Home",110,height-100);
  text("Look good:D",100,height-70);
  
  text("Check my appearance",110,height-40);
  
  push();
  translate(70,0);
  fill(120,190,243);
  rect(100,height-105,10,10);
  
  fill(0,150);
  rect(115,height-75,15,2);
  circle(200, height-45,5);
  
  fill(0,150);
  text("Outside the home",110,height-100);
  text("Do not care:)",125,height-70);
  text("Unintentional",210,height-40);
  
  pop();
  
  push();
  translate(200,0);
  fill(255,90,90);
  rect(100,height-105,10,10);
  
  fill(0,150);
  rect(80,height-75,8,2);
  text("Screen",110,height-100);
  text("Look bad:(",90,height-70);
  
  pop();
  
  
  pop();
  
}