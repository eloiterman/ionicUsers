import { Component, OnInit } from '@angular/core';


//added imports 
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';
import { User } from '../user.model'; 
//might need
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.page.html',
  styleUrls: ['./user-edit.page.scss'],
})
export class UserEditPage implements OnInit {

  user: User;
  errors: any = [];
  errorMessage: string;

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.getUser(id);
  }

  getUser(id): void {
    this.usersService.getUser(id).subscribe(
      (response:any) => {
        this.user = response.user
      }
    );
  }
  response(response): void{
    if(response.success===false){
      this.errors = response.error.errors;
      this.errorMessage = response.error.message;
    }

    if(response.success===true){
      this.router.navigate(['/users/view/', response.user._id]);
    }
  }

  onSubmit(): void {
    this.usersService.editUser(this.user).subscribe(
      (response) => {
        this.response(response)
      }
    );
  }


}//end


