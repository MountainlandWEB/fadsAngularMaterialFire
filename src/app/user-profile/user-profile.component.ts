import { Component, OnInit } from '@angular/core';
import {UserProfileService} from './user-profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: any;

  constructor(
    private userService: UserProfileService
  ) { }

  ngOnInit() {
    this.getuserInfo();
  }

  private getuserInfo (){
    this.userService.getLoggedInUserInfo().subscribe( res => {
      this.user = res;
    })
  }

}
