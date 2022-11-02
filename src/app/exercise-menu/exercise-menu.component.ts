import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Exercise } from '../models/exercise';
import { Muscles } from '../models/muscles';
import { ExerciseService } from '../services/exercise-service.service';
import { Router } from '@angular/router';
import { ExerciseInfoComponent } from '../exercise-info/exercise-info.component';
import { DataTransferService } from '../services/data-transfer.service';

@Component({
  selector: 'app-exercise-menu',
  templateUrl: './exercise-menu.component.html',
  styleUrls: ['./exercise-menu.component.css']
})
export class ExerciseMenuComponent implements OnInit {
  muscle!: Muscles;
  exercise!: Exercise;
  exerciseList!: Exercise[]; 
  muscleList: string[] = [
    "core", "back", "biceps", "butt", "chest", "legs", "shoulders", "triceps"
  ]
  constructor(private exerciseServ: ExerciseService, private router: Router,
    private dataTransfer: DataTransferService) { }

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
    this.dataTransfer.saveExercise(this.exercise);
    this.router.navigate(['/info']);
  }

  public specificExercises(muscle: string) {
    console.log(muscle);
    this.exerciseServ.getExerciseByMuscle(muscle).subscribe(
      (res) => {
        this.exerciseList = res;
      })
  }

}
