import { Component, OnInit, Input } from '@angular/core';
import { Exercise } from '../models/exercise';

@Component({
  selector: 'app-exercise-info',
  templateUrl: './exercise-info.component.html',
  styleUrls: ['./exercise-info.component.css']
})
export class ExerciseInfoComponent implements OnInit {
  @Input() exercise!: Exercise;
  constructor() { }

  ngOnInit(): void {
  }

}
