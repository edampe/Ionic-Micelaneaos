import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';

// Plugins
import { Storage } from '@ionic/storage';

@Injectable()
export class AjustesServices {

  ajustes = {
    mostrar_tutorial: true 
  }

  constructor( private platform: Platform,
               private storage: Storage ) {
    console.log('Hello AjustesProvider Provider');
  }

  cargar_storage(){
    
    let promesa = new Promise( ( resolve, reject ) => {
      if ( this.platform.is('cordova') ){

              console.log('1');
        

          this.storage.ready()
                  .then( () => {
              console.log('2');
                    
            
            this.storage.get('ajustes').then( ajustes => {

              console.log('3');              

              if( ajustes ){
                  this.ajustes = ajustes
                  console.log('Your age is', ajustes);
              }

              resolve()

            });

          })

      }else{
        console.log("Estamos en el comu")
  
        if ( localStorage.getItem('ajustes')){
          console.log("entramos a los ajustes")
          
          this.ajustes = JSON.parse( localStorage.getItem('ajustes') )

        }
          resolve()
        
      }
    })

    return promesa
  }

  guardar_storage(){

    if ( this.platform.is('cordova') ){

      console.log('4');      

      this.storage.ready()
                  .then( () => {

              console.log('5');                    
            
            this.storage.set('ajustes', this.ajustes).then();

          })

    }else{
      console.log("Estamos en el comu")      
      localStorage.setItem('ajustes', JSON.stringify(this.ajustes))
    }

  }

}
