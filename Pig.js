class Pig extends BaseClass {
  constructor(x, y){
    //var options={
    //  'isStatic':true
    //}
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.Visiblity = 255;
    //this.didop=0
  }
  // // // //pigStaticOn(){
  // // //   var options={
  // // //     'isStatic':true
  // // //   }
  // // //   this.didop=1;
  // // // }
  // // // pigStaticOff(){
  // // //   var options={
  // // //     'isStatic':false
  // // //   }
  // // // }
  

  display(){
  //console.log(this.didop);
   //console.log(this.body.speed);
   if(this.body.speed < 3){
    super.display();
   }
   else{
     World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     image(this.image, this.body.position.x, this.body.position.y, 50, 50);
     pop();
   }
  }

  score(){
    if (this.Visiblity < 0 && this.Visiblity > -7 ){
      score++;
    }
  }
};