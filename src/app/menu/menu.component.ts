import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { User } from '../models/user';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{

  user: User | null = null;

  constructor(private accountService: AccountService){}

  ngOnInit(): void {
    this.user = this.accountService.getActiveUser();
  }

  logout(){
    this.accountService.logout();
    this.user = null;
  }

}
