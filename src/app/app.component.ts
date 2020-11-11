import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from './models/user';
import { UserService } from './services/backend/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  user = null;

  users = [];
  constructor(
    private httpClient: HttpClient,
    private userService: UserService
  ){
    this.userService.getUser().subscribe((response)=>{
      console.log('response: ',response);
      this.user = response;
    })

    let postData: User = {name: "sarfaraz", accountid: 1};
    this.userService.postUser(postData).subscribe((response)=>{
      console.log('response:',response);
    })

    this.userService.getUsers().subscribe((response:any)=>{
      this.users = response;
    })
  }
}
