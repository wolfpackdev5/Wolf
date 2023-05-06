import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/models/user';
import { CognitoService } from 'src/app/services/cognito.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  client!: any;

  constructor(public dialogRef : MatDialogRef<ProfileComponent>, private cognitoService: CognitoService) { }
  //all the check boxes in the html file need to be ng model booleans 
  first!: string;
  last!: string;
  email!: string;
  abs: boolean = false;
  back: boolean = false;
  butt: boolean = false;
  biceps: boolean = false;
  chest: boolean = false;
  legs: boolean = false;
  triceps: boolean = false;

  ngOnInit(): void {
    this.userDetails();
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  userDetails(): void {
    this.cognitoService.getUser().then((user: any) => {
      if(user) {
        console.log(user.attributes.email);
        this.client = user;
      }
      else {
        console.log("No user logged in");
      }
    })
  }

}
