let song;

function setup() {
  song = loadSound('assets/bobby.mp3');
  createCanvas(720, 200);
  background(255, 0, 0);
}

function mousePressed() {
  if (song.isPlaying()) {
    // .isPlaying() returns a boolean
    song.stop();
    background(255, 0, 0);
  } else {
    song.play();
    background(0, 255, 0);
  }
}
function keypressed(){
  if (keyCode=== RIGHT_ARROW){
    setVolume(0.5);
  }
  if (keyCode=== LEFT_ARROW){
    setVolume(1.0);
}}