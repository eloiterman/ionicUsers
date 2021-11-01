import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { ViewChild } from '@angular/core';
//import service
import { ArticlesService  } from '../articles.service';
//import schema
import { Article } from '../article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss']
})
export class ArticlePage implements OnInit {
  //article:Article = new Article();
  //articles: Article;
  article: Article;

  constructor(
    private activatedRoute: ActivatedRoute,
    private articlesService: ArticlesService,
    private router: Router
  ) { }
//DEVENOTE check this against user page if needed



ngOnInit() {    
  this.activatedRoute.params.subscribe(params=>{
   
   this.getArticle(params['articleId']);
 });
}

getArticle(id:string):void {
 this.articlesService.getArticle(id).subscribe(
   (response:any)=>{
     // console.log(response);
     this.article = response.article;
   }
 );
}



//DEVNOTE ADD LATER
  //3. Implement the deleteUser() method
  /*deleteArticle(id: string): void {
    if(confirm("Are you sure to delete " + this.article.title)) {
      this.articlesService.deleteArticle(id).subscribe(
        ()=>{this.router.navigate(['/articles'])}
      );
    }
  }*/


}