import { Component, OnInit } from '@angular/core';
import { ApiRealisationService } from '../api-realisation.service';
import { Router, ActivatedRoute ,ParamMap} from '@angular/router';


@Component({
  selector: 'app-realisation',
  templateUrl: './realisation.page.html',
  styleUrls: ['./realisation.page.scss'],
})
export class RealisationPage implements OnInit {
  public selectedId;

  realisation: any; //Pour initialiser la variable article
  constructor(private router: Router, private route: ActivatedRoute ,public ApiRealisationService: ApiRealisationService) {
    this.displayRealisation();
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap) =>{
    let id = parseInt(params.get('id'));
    this.selectedId=id;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RealisationPage');
  }

  //function affichage les articles
  displayRealisation()
  {
    this.ApiRealisationService.displayRealisation()
    .then(data=>
      {
        this.realisation = data;
        console.log(this.realisation);
      })
  }

  onSelect(data)
  {
 this.router.navigate(['/realisation',data.id])

  }



}
