import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  imgs:any;
  texts:any;

  constructor(public camera: Camera, public navp:NavController, public tts:TextToSpeech) { }

  ngOnInit() {
  }
  home() {
    this.navp.navigateBack('home');
  }
  cam(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.imgs = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }
  textto(){
    this.tts.speak(this.texts)
  .then(() => console.log('Success'))
  .catch((reason: any) => console.log(reason));
  }

}
