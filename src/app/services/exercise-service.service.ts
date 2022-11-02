import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Exercise } from '../models/exercise';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  awsUrl = "https://lq65y56sxe.execute-api.us-east-1.amazonaws.com/dev/wolfpack";

  constructor(private http: HttpClient) { }

  public getAllExercises(): Observable<any> {
    return this.http.get(`${this.awsUrl}/exercises`);
  }

  public getExerciseByMuscle(muscle: string): Observable<any> {
    console.log(muscle);
    return this.http.get(`${this.awsUrl}/${muscle}`);
  }
}
