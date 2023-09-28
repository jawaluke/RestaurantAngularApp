import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  userEmailAddress!: String;

  constructor(private route: Router) {}

  loginSubmit() {
    if(this.userEmailAddress=="jawahar") {
      sessionStorage.setItem("loggedIn", "true");
      this.route.navigate(["/user/store"]);
    }
    else{
      alert('please check your credentials...');
      sessionStorage.setItem("loggedIn", "");
    }
    this.userEmailAddress = "";
  }

}
