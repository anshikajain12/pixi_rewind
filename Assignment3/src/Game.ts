import { Application, Graphics, Sprite, Text, Container, Texture, TextStyle } from "pixi.js";

export class Game extends Application {
  constructor(opts: any) {
    super(opts);
    // this.nextButton();
    // this.previousBtn();
    this.middle();
  }


  public nextButton() {
    //Next button
    const nextbtn= Sprite.from("./assets/next.png");
    nextbtn.anchor.set(0.5);
    nextbtn.x = this.screen.width / 1.09;
    nextbtn.y = this.screen.height / 2;
    this.stage.addChild(nextbtn);
    nextbtn.interactive= true;
    nextbtn.buttonMode=true;
    nextbtn.on("pointerdown", this.onClick.bind(this));
  }

  
  public previousBtn() {
    //previous btn
    const prevbtn= Sprite.from("./assets/prev.png");
    prevbtn.anchor.set(0.5);
    prevbtn.x = this.screen.width / 12;
    prevbtn.y = this.screen.height / 1.99;
    prevbtn.width= 175;
    prevbtn.height= 150;
    this.stage.addChild(prevbtn);
    prevbtn.interactive=true;
    prevbtn.buttonMode=true;
    prevbtn.on("pointerdown", this.onClicked.bind(this));
  }
  
  public right() {
    // let images:any[]=["./assets/right.png","./assets/right1.png","./assets/right2.png","./assets/leftPage.png","./assets/left2.png"];
    const sprite = Sprite.from("./assets/right.png");
    sprite.anchor.set(0.5);
    sprite.x = this.screen.width / 2;
    sprite.y = this.screen.height / 2;
    this.stage.addChild(sprite);
  }
  public left() {
    const sprite = Sprite.from("./assets/leftPage.png");
    sprite.anchor.set(0.5);
    sprite.x = this.screen.width / 2;
    sprite.y = this.screen.height / 2;
    this.stage.addChild(sprite);
  }
  public textButton() {
    const style = new TextStyle({
     fontFamily: "Arial",
     fontSize: 36,
     fontStyle: "italic",
     fontWeight: "bold",
     fill: ["#ffffff", "#00ff99"], // gradient
     stroke: "#4a1850",
     strokeThickness: 5,
     dropShadow: true,
     dropShadowColor: "#000000",
     dropShadowBlur: 4,
     dropShadowDistance: 6,
     wordWrap: true,
     wordWrapWidth: 440,
     lineJoin: "round",
   });
   const text = new Text("Please Click on Buttons",style);
   text.x = this.screen.width/3;
   text.y = this.screen.height/8;
   
   const sprite = Sprite.from("./assets/game.jpg");
   sprite.anchor.set(0.5);
   sprite.x = this.screen.width / 2;
   sprite.y = this.screen.height / 2;
   sprite.buttonMode=true;
   sprite.interactive=true;
   sprite.on("pointerup",()=>{
     text.y+=20;
     text.rotation-=0.1;
     console.log(text.y)
    
    })
    this.stage.addChild(sprite);
    this.stage.addChild(text);
   
 }
 
  public middle() {
    const sprite = Sprite.from("https://media.istockphoto.com/id/499695935/photo/blinds.jpg?b=1&s=170667a&w=0&k=20&c=yML_Oc8MAYlaTbgnepj7T5MwVcvcE18yo39rHwI8Jg4=");
    sprite.anchor.set(0.5);
    sprite.x = this.screen.width / 2;
    sprite.y = this.screen.height / 2;
    sprite.width=innerWidth;
    sprite.height=innerHeight;
    this.stage.addChild(sprite);
    this.nextButton();
    this.previousBtn()
    this.textButton();
  }

  public onClicked() {
    this.stage.removeChild();
    this.nextButton();
    this.right();
    
  }

  public onClick() {
    this.stage.removeChild();
    this.left();
    this.previousBtn();
  }

 
}
