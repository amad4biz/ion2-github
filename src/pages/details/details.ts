import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Github } from '../../providers/github';

/*
  Generated class for the Details page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
  providers : [Github]
})
export class DetailsPage {

    public readme = '';
    public repo

  constructor(public navCtrl: NavController, public navParams: NavParams, private github: Github) {


   this.repo = navParams.get('repo');

   this.github.getDetails(this.repo).subscribe(

        data => this.readme = data.text(),

        err =>{

          if(err.status === 404){
              
              this.readme = 'This repo does not have a README. :(';

          }else{
             
                console.error(err);

             }
        },

        () => console.log('getDetails done')
       
   );


  }

  



}
