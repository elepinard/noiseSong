let song;
var table;
var row =1;
var time;
var sensor;


function preload() {
  // Load a sound file
  song = loadSound('assets/bobby.mp3');
  table = loadTable('assets/loudness.csv', 'csv', 'noHeader');
}

function setup() {
  createCanvas(1000, 600);
  background(200);
  // Loop the sound forever
  // (well, at least until stop() is called)
  song.loop();
  ellipse(width-50, height-50, 48, 48);
  ellipse(width-110, height-50, 48, 48);
  textSize(32);
  text(row,100,100);
}

function draw() {
  
  //table.getRowCount()
    table.getRow(row);
    //print it column by column
    //note: a row is an object, not an array
    sensor = table.getNum(row,1);
    text(sensor,150,100); 

    print(sensor); //optional but helpful

  // Set the volume to a range between 0 and 1.0
  var volume = map(sensor, 1000, 1200, 0, 1);
  volume = constrain(volume, 0, 1);
  song.amp(sensor);

 
  fill(0);
  stroke(0);
  ellipse(width-50, height-50, 48, 48);
  ellipse(width-110, height-50, 48, 48);
  fill(0,100,100);
  textSize(32);
  
}

function mousePressed(){
  let d=dist(mouseX,mouseY,width-50, height-50);
  if (d<20){
    background(random(255),random(255),random(255))
    ellipse(width-50, height-50, 48, 48);
    ellipse(width-110, height-50, 48, 48);
    if (row<=table.getRowCount()){
      row+=1;
    }
    textSize(32);
    text(row,100,100);
  }
  let f=dist(mouseX,mouseY,width-110, height-50);
    if (f<20){
    background(255,255,255);
    ellipse(width-50, height-50, 48, 48);
    ellipse(width-110, height-50, 48, 48);
    if (row>=0){
      row-=1;
    }
  }
  textSize(32);
  text(row,100,100);
  
}
