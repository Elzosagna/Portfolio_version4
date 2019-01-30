import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute ,ParamMap} from '@angular/router';

@Component({
  selector: 'app-realisation',
  templateUrl: './realisation.page.html',
  styleUrls: ['./realisation.page.scss'],
})
export class RealisationPage implements OnInit {
  public selectedId;

  realisation: any; //Pour initialiser la variable article
  constructor(public http: HttpClient, private router: Router, private route: ActivatedRoute) { }
  httpdata;
  ngOnInit() {
    this.http.get("http://elhadjiibrahimas.promo-21.codeur.online/porfolio_symfony/public/api/realisations.json")
    .subscribe((data) => this.displaydata(data));
    this.route.paramMap.subscribe((params:ParamMap) =>{
      let id = parseInt(params.get('id'));
         this.selectedId=id;
   });
  }

  displaydata(data)
  {
    this.httpdata = data;
    console.log(this.httpdata);
 }
  onSelect(data)
  {
    this.router.navigate(['/realisation',data.id])
  }
  isSelected(data) { return data === this.selectedId; }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RealisationPage');
  }
}
