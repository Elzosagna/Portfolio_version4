import { Component, OnInit } from '@angular/core';
import { ApiArticleService } from '../api-article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss'],
})
export class ArticlePage implements OnInit {

  article: any; //Pour initialiser la variable article
  constructor(public ApiArticleService: ApiArticleService) {
    this.displayArticle();
  }

  ngOnInit() {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArticlesPage');
  }

  //function affichage les articles
  displayArticle()
  {
    this.ApiArticleService.displayArticle()
    .then(data=>
      {
        this.article = data;
        console.log(this.article);
      })
  }



}
