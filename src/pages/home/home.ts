import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {DetailsPage } from '../../pages/details/details';
import { Github } from '../../providers/github';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',

  providers: [Github]
})
export class HomePage {

   public Repos;
   public username;


  constructor(public navCtrl: NavController, private github : Github) {
    
  }


  getRepos(){


    this.github.getRepos(this.username).subscribe( data => {


            // console.log (data);

              this.Repos = data.json();

             // console.log(this.Repos);

     },

     err => console.error(err),

     () => console.log('repos found')

     );

     

  }

  goToDetails(repo){

    this.navCtrl.push(DetailsPage, {repo: repo});

  }

}
