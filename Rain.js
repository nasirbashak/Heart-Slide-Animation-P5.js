var drops = [];
var hu

var imgs = []
var slides = []
var blasts = []

var recording 


function preload(folder) {

  for(var i=0;i<25;i++){
    imgs[i] = loadImage('photos2/k'+(i+1));  
    slides[i] = new Slide(imgs[i])
    blasts[i] = new Blast()
    
  }

}


function setup() {
  createCanvas(1300, 650,P2D );
  hu=0
  recording = false
  colorMode(HSB)
  for (var i = 0; i < 50; i++) {
    drops[i] = new Drop();
  }
}

function keyPressed(){
 
  if(keyCode == 'r' || keyCode == 'R'){
    recording = ! recording
    
  }
  
  
}


function draw() {
  background(hu++,0,0);
  if(hu>200){
    hu=0
    
  }
  
  for(var j = 0;j<slides.length;j++){
    
    slides[j].displace()
    slides[j].show()
    blasts[j].crack()
    blasts[j].show()
    
    
    
  }

  //frameRate(200)
  for (var i = 0; i < drops.length; i++) {
    drops[i].fall();
    //drops[i].show();
    drops[i].displayText("Birthday",7)
    drops[i].displayText("Happy",5)
    drops[i].displayText("Konda",10)
    drops[i].emoji()
    
    
  }
  
   
  
  //if(recording){
  // // saveFrames("output/bday_####.png");
  //  fill(255,0,0)
  //}else{
  //   fill(0,255,0)
  //}
  ////fill(255)
  //ellipse(width/2,height-50,50,50)

  //noLoop()
}
