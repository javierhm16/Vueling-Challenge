import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public username?: string;
  @Input() public logoutB: boolean = false;

  constructor(public userSvc: UserService) { }

  ngOnInit(): void {
    this.username = this.userSvc.getUsername();
  }

  logout() {
    this.userSvc.logout();
  }

}
