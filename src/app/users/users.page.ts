import { Component, OnInit } from '@angular/core';
// refresh list
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../users.service';
import { User } from '../user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  user:User = new User();
  users:User;

  constructor(
    private usersService:UsersService,
    // refresh list
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) {}

  // ngOnInit() {
  //   this.getUsers();
  // }
  // refresh list
    ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.getUsers();
    });
  }

  public getUsers(): void{
    this.usersService.getUsers().subscribe(
      (response:any) => {
        // console.log(response);
        this.users = response.users;
            }
    );
  }

  deleteUser(id:string): void {
    if (confirm("Are you sure to delete " + this.user.username)) {
      this.usersService.deleteUser(id).subscribe(
        () => { this.router.navigate(['/users']) }
    );
    }
  }  
}