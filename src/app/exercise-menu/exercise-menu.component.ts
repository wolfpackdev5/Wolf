import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Exercise } from '../models/exercise';
import { Muscles } from '../models/muscles';
import { ExerciseService } from '../services/exercise-service.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ExerciseInfoComponent } from '../exercise-info/exercise-info.component';

@Component({
  selector: 'app-exercise-menu',
  templateUrl: './exercise-menu.component.html',
  styleUrls: ['./exercise-menu.component.css']
})
export class ExerciseMenuComponent implements OnInit {
  muscle!: Muscles;
  exercise!: Exercise;
  exerciseList!: Exercise[]; 
  component =  ExerciseInfoComponent;

  constructor(private exerciseServ: ExerciseService, private router: Router,
  private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getExercises();
  }

  public getExercises(): void {
    this.exerciseServ.getAllExercises().subscribe(
      (res) => {
        this.exerciseList = res;
        console.log(res);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      });
  }

  public showInfo(exercise: Exercise): void {
    this.exercise = exercise;
    console.log(this.exercise.id);
    this.router.navigate(['/info']);
  }

}
