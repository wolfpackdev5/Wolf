import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CognitoService } from '../services/cognito.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public router: Router, private cognitoService: CognitoService) { }

  ngOnInit(): void { 
    this.getUserDetails();
  }

  private getUserDetails() {
    this.cognitoService.getUser()
    .then((user: any) => {
      if(user) {
        //logged in
        console.log(user);
      }
      else {
        //if not logged in send them to sign in 
        this.router.navigate(['/login'])
      }
    })
  }

  signOutWithCognito() {
    this.cognitoService.signOut()
    .then(() => {
      this.router.navigate(['/login']);
    })
  }

}
