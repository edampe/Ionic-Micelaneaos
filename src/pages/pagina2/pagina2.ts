import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {


  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public loadingCtrl: LoadingController) {

  }

  irPagina3(){
    this.navCtrl.push("mi-pagina3")
  }

   ionViewDidLoad() {
    console.log("ionViewDidLoad")
  }

  ionViewWillEnter(){
    console.log("ionViewWillEnter")
  }

  ionViewDidEnter(){
    console.log("ionViewDidEnter")    
  }

  ionViewWillLeave(){
    console.log("ionViewWillLeave")    
  }

  ionViewDidLeave(){
    console.log("ionViewDidLeave")    
  }

  ionViewWillUnload(){
    console.log("ionViewWillUnload")    
  }

  ionViewCanEnter(){

    let promesa = new Promise( (resolve, reject) => {

      let confirm = this.alertCtrl.create({
      title: '¿Seguro?',
      message: '¿Esta seguro de que desea entrar?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Disagree clicked');
            resolve(false) 
          }
        },
        {
          text: 'Si, seguro',
          handler: () => {
            console.log('Agree clicked');
            resolve(true)
          }
        }
      ]
    });
    confirm.present();

    })
      return promesa
  }

  ionViewCanLeave(){
    console.log("ionViewCanLeave") 

    console.log("Espere 3 segundos para salir")

    let loader = this.loadingCtrl.create({
      content: "Please wait...",
    });
    loader.present();

    let promesa =  new Promise ( ( resolve, reject ) =>{

      setTimeout( () => {
        loader.dismiss()
        resolve(true)
      }, 2000 )

    } )
    return promesa  
  }


}
