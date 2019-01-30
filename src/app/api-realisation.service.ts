import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ApiRealisationService {

  ApiConnect2 = 'http://elhadjiibrahimas.promo-21.codeur.online/porfolio_symfony/public/api/realisations.json';

    constructor(public http: HttpClient) {
      console.log('Hello MovieApiProvider Service');
    }

    displayRealisation()
    {
      return new Promise(resolve =>
        {
          this.http.get(this.ApiConnect2).subscribe(data =>
            {
              resolve(data);
            }, err=>
            {
              console.log(err);
            });
        });
  }
}
