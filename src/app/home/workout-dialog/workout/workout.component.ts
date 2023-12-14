import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Exercise } from 'src/app/models/exercise';
import { CognitoService } from 'src/app/services/cognito.service';
import { ExerciseService } from 'src/app/services/exercise-service.service';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent implements OnInit {
  //make a method for pulling the workout from the backend 
  //call build a workout in home componenet on build a workout button press 
  //so that every time the workout is brought (from profile too) it doesnt create brand new one 
  @Input() workout!: any;
  user!: any;

  constructor(public router: Router, private cognitoService: CognitoService, public dialogRef: DialogRef, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.user = this.getUserDetails();
  }

  private getUserDetails() {
    this.cognitoService.getUser()
    .then((user: any) => {
      if(user) {
        this.user = user;
      } else {
        this.router.navigate(['/login']);
      }
    })
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
