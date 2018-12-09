
function Slide(img){
  
  this.x = random(-300,300)
  this.y = random(0,650-img.height)
  this.xSpeed = random(1,3)
  this.img = img
  
  
  this.displace = function(){
   
    this.xSpeed = map(mouseX,0,width,-5,5)

    this.x= this.x + this.xSpeed
    
    if((this.x+img.width/2)>width){
      this.x = random(-200,200)
  
    }

  }
  
  this.show = function(){
    
    image(this.img,this.x,this.y)

  }

}
