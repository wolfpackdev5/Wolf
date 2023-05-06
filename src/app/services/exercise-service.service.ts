import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Exercise } from '../models/exercise';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  awsUrl = "https://lq65y56sxe.execute-api.us-east-1.amazonaws.com/dev/wolfpack";
  //backend = "http://localhost:8080";
  feign = "http://localhost:6500";

  constructor(private http: HttpClient) { }

  public getAllExercises(): Observable<any> {
    return this.http.get(`${this.feign}/feign/allExercises`);
  }

  public getExerciseByMuscle(muscle: string): Observable<any> {
    console.log(muscle);
    return this.http.get(`${this.feign}/feign/exercises/${muscle}`);
  }

  public buildAWorkout(email: string): Observable<any> {
    return this.http.get(`${this.feign}/feign/newWorkout`);
  }
}
