import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public detailsId;

  constructor(private http: HttpClient,private route: ActivatedRoute,private router: Router) { }

  httpdata;

  ngOnInit() {
  this.http.get("http://elhadjiibrahimas.promo-21.codeur.online/porfolio_symfony/public/api/realisations.json")
    .subscribe((data) => this.displaydata(data));
    this.route.paramMap.subscribe((params:ParamMap) =>{
         let id = parseInt(params.get('id'));
            this.detailsId=id;
      });
  }
  gotoEntreprise() {
    let selectedId = this.detailsId ? this.detailsId : null;
    this.router.navigate(['../', { id: selectedId }], { relativeTo: this.route });
  }
  displaydata(data) {this.httpdata = Array.of( data[this.detailsId-1]);

  }

}
