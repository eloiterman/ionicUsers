
import { Component, OnInit } from '@angular/core';

//router
import { ActivatedRoute, Router } from '@angular/router';
import { ViewChild } from '@angular/core';
// 1. Import the UserService
import { ArticlesService } from '../articles.service';

// 2. Import the User Object/Schema
import { Article } from '../article.model';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.page.html',
  styleUrls: ['./articles.page.scss']
})
export class ArticlesPage implements OnInit {

  // 3. Create a users property of type user
  articles:Article[] = [];

  // 4. Inject the ArticlesService into the constructor
  constructor(private articlesService: ArticlesService) { }

  // 6. Make a call to the service on initialization
  ngOnInit() {
    this.getArticles(); 
   
  }

  // 5. Create a local wrapper for

  getArticles(): void {
    this.articlesService.getArticles().subscribe(
      (response:any) => {
        this.articles = response.articles
       console.log(this.articles)
      }
    );
  }
/*
  deleteArticle(id:string): void {
    if (confirm("Are you sure to delete " + this.article.title)) {
      this.articlesService.deleteArticle(id).subscribe(
        () => { this.router.navigate(['/articles']) }
    );
    }
  }  
*/


}