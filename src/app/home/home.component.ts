import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ExerciseMenuComponent } from '../exercise-menu/exercise-menu.component';
import { User } from '../models/user';
import { CognitoService } from '../services/cognito.service';
import { ExerciseService } from '../services/exercise-service.service';
import { ProfileComponent } from './profile-dialog/profile/profile.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  client = this.getUserDetails();

  constructor(public router: Router, private cognitoService: CognitoService, private exerciseService: ExerciseService,
    public dialog: MatDialog) { }

  ngOnInit(): void { 
    this.getUserDetails();
  }

  getUserDetails() {
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

  //create a method that calls getUserDetails and then calls the userCrud in the backend to get profile information

  signOutWithCognito() {
    this.cognitoService.signOut()
    .then(() => {
      this.router.navigate(['/login']);
    })
  }

  buildWorkout(email : string) {
    this.exerciseService.buildAWorkout(email).subscribe(
      (res) => {
        console.log(res);
      })
  }

  openDialog(): void {
    console.log("called");
    const dialogRef = this.dialog.open(ProfileComponent, {
      width: '250px',
      data: {client: this.client}
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(result);
    // })
  }

}
