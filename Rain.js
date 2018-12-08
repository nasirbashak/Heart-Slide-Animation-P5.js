var drops = [];
var hu

var imgs = []
var slides = []
var blasts = []

function preload(folder) {
  
  //imgs[1] = loadImage('photos2/k'+1)

  for(var i=0;i<25;i++){
    imgs[i] = loadImage('photos2/k'+(i+1));  
    slides[i] = new Slide(imgs[i])
    blasts[i] = new Blast()
  }
  
  
  
  
}


function setup() {
  createCanvas(1300, 650,P2D );
  hu=0
  colorMode(HSB)
  for (var i = 0; i < 50; i++) {
    drops[i] = new Drop();
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
  //noLoop()
}
