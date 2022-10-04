import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { CognitoService } from 'src/app/services/cognito.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User | undefined;
  alertMessage: string = '';
  showAlert: boolean = false;

  isForgotPassword: boolean = false;
  newPassword: string = '';

  constructor(private router: Router, private cognitoService: CognitoService) { }

  ngOnInit(): void { 
    this.user = {} as User;
  }
  signInWithCognito() {
    if(this.user && this.user.email && this.user.password) {
      this.cognitoService.signIn(this.user)
      .then(() => {
        this.router.navigate(['/']);
      })
      .catch((error: any) => {
        this.displayAlert(error.message);
      })
    }
    else {
      this.displayAlert("Please enter a valid email or password");
    }
  }

  private displayAlert(message: string) {
    this.alertMessage = message;
    this.showAlert = true;
  }

  forgotPasswordClicked() {
    if(this.user && this.user.email) {
      this.cognitoService.forgotPassword(this.user)
      .then(() => {
        this.isForgotPassword = true;
      })
      .catch((error: any) => {
        this.displayAlert(error.message);
      })
    }
    else {
      this.displayAlert("Please enter a valid email address");
    }
  }

  newPasswordSubmit() {
    if(this.user && this.user.code && this.newPassword.trim().length!= 0) {
      this.cognitoService.forgotPasswordSubmit(this.user, this.newPassword.trim())
      .then(() => {
        this.displayAlert("password updated");
        this.isForgotPassword = false;
      })
      .catch((error: any) => {
        this.displayAlert(error.message);
      })
    }
    else {
      this.displayAlert("Please enter valid input");
    }
  }
}
