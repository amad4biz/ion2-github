import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Github provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Github {

  constructor(public http: Http) {
   
  }

  getRepos(username){

     return this.http.get('https://api.github.com/users/' + encodeURI(username) + '/repos');

     // or this but you cannot get the list on the view

    //  return this.http.get('https://api.github.com/users/' + encodeURI(username) + '/repos').map(res => res.json());
  }


  getDetails(repo){

   let headers = new Headers();

   headers.append('Accept', 'application/vnd.github.VERSION.html');

   return this.http.get(`${repo.url}/readme`, {headers : headers});

  }

}
