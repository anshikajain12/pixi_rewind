import { sound } from "@pixi/sound";
import { Application, Graphics, Sprite, Text, Container, Texture} from "pixi.js";
import 'pixi.js';

export class Game extends Application {
 
  constructor(opts: any) {
    super(opts);
    this.bg()
    this.playButton();
  }

  public bg(){
    const sprite= Sprite.from("https://media.istockphoto.com/id/637895814/photo/headphones-notepad-and-pc.jpg?s=612x612&w=0&k=20&c=VITLNbwqf8CFTxOtTWch4QFzS2483HBniBziJdOyaOY=");
    sprite.anchor.set(0.5);
    sprite.x= this.screen.width/2;
    sprite.y= this.screen.height/2;
    sprite.width=innerWidth;
    sprite.height=innerHeight
    this.stage.addChild(sprite)
  }
  public playButton() {
    //Next button
    const nextbtn= Sprite.from("./assets/play.png");
   nextbtn.anchor.set(0.5);
    nextbtn.x = this.screen.width / 2;
    nextbtn.y = this.screen.height / 2;
    nextbtn.width= 100;
    nextbtn.height=98;
    nextbtn.interactive= true;
    nextbtn.buttonMode=true;
    nextbtn.on("pointerdown",this.onButtonDown.bind(this));
    this.stage.addChild(nextbtn);
  }
  public pauseButton() {
    //Next button
    const nextbtn= Sprite.from("./assets/pause.png");
    nextbtn.anchor.set(0.5);
    nextbtn.x = this.screen.width / 2;
    nextbtn.y = this.screen.height / 2;
    nextbtn.width= 150;
    nextbtn.height=150;
    nextbtn.interactive= true;
    nextbtn.buttonMode=true;
    nextbtn.on("pointerdown", this.onButtonUp.bind(this));
    this.stage.addChild(nextbtn);
  }
  
  onButtonDown(){
    sound.add("s1","assets/abc.mp3");
    sound.play("s1");
    this.stage.removeChildren();
    this.bg()
    this.pauseButton();
  }
  onButtonUp(){
    sound.stop("s1");
    this.stage.removeChildren();
    this.bg()
    this.playButton();
  }
  
}