import { Component, OnInit } from '@angular/core';
import { IUser } from '../user/user.model';
import { UserService } from '../user/user.service';

@Component({
  selector: 'bot-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css']
})
export class SiteHeaderComponent implements OnInit{
  user: IUser | null = null;
  showSignoutMenu: boolean = false;

  constructor(private userSvc: UserService) { }

  ngOnInit() {
    this.userSvc.getUser().subscribe({
      next: (user) => {this.user = user}
    });
  }

  toggleSignOutMenu (){
    this.showSignoutMenu = !this.showSignoutMenu;
  }

  signOut() {
    this.userSvc.signOut();
    this.showSignoutMenu = false;
  }
}
