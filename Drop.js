
function Drop() {
  
  this.x = random(0,1000)
  this.y = random(-200,200)
  this.ySpeed = random(1,3)
  this.tSize= 16
  this.selectHeart = width/2
  
  this.fall = function(){
   
     this.ySpeed = map(mouseY,0,height,3,10)
      this.tSize = map(mouseX,0,width,16,32)
        this.selectHeart = map(mouseX,0,width,16,32)

    
    this.y = this.y + this.ySpeed
    
    
    if(this.y>height){
      this.y = random(-200,0)
    }

  }
  
  this.displayText = function(name,pos){
     noStroke(255)
     fill(255)
     //textFont('Georgia')
     textStyle(BOLD)
    textSize(this.tSize)
    //textAlign(TOP,TOP)
    
    for(var i = 0 ;i< name.length; i++){
      text(name.charAt(i),this.x*pos,this.y+(i+1)*this.tSize)
    
    }
    //print(this.x+" "+this.y)
    
  }
  
  this.show = function(){
    stroke(255)
    textSize(this.tSize)
    //textAlign(TOP,TOP)
    
    var index = floor(random(1,4))
    print(index)
    switch(index){
      case 1: 
        this.displayText("Happy",5)
        //print("happy")
        break
        
      case 2: 
        this.displayText("Birthday",7)
        //print("birthday")
        break
        
       case 3: 
        this.displayText("Konda",10)
        //print("konda")
        break

    }
    //this.displayText("Happy")
    //this.displayText("Birthday")
    //this.displayText("Konda")
    
    //text("K",this.x,this.y)
    //text("o",this.x,this.y+this.tSize)
    //text("n",this.x,this.y+2*this.tSize)
    //text("d",this.x,this.y+3*this.tSize)
    //text("a",this.x,this.y+4*this.tSize)
    
    
  }
  
  this.emoji = function(){
   textSize(this.tSize)

    //blue
   text("💙",this.x,this.y)
 
  }

}
