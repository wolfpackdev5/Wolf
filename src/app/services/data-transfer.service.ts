import { Injectable } from '@angular/core';
import { Exercise } from '../models/exercise';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
  data!: Exercise;
  constructor() { }

  public saveExercise(exercise: Exercise) {
    this.data = exercise;
  }

  public getExercise() {
    return this.data;
  }

  public convertToString(array: String[]) {
    let string = array.toString();
    return string;
  }
}
