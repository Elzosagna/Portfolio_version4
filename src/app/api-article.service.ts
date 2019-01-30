import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ApiArticleService {

  ApiConnect = 'http://elhadjiibrahimas.promo-21.codeur.online/porfolio_symfony/public/api/articles.json';

    constructor(public http: HttpClient) {
      console.log('Hello MovieApiProvider Service');
    }

    displayArticle()
    {
      return new Promise(resolve =>
        {
          this.http.get(this.ApiConnect).subscribe(data =>
            {
              resolve(data);
            }, err=>
            {
              console.log(err);
            });
        });
  }
}
