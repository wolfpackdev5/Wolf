import { Component, OnInit, Input } from '@angular/core';
import { Exercise } from '../models/exercise';
import { DataTransferService } from '../services/data-transfer.service';
import { YouTubePlayerModule } from '@angular/youtube-player';

@Component({
  selector: 'app-exercise-info',
  templateUrl: './exercise-info.component.html',
  styleUrls: ['./exercise-info.component.css']
})
export class ExerciseInfoComponent implements OnInit {
  exercise!: Exercise;
  eid!: string | null;
  muscles!: string | null;
  tutorial!: string | null;
  videoId!: string | null;
  apiLoaded = false;

  constructor(private dataTransfer: DataTransferService) { }

  ngOnInit(): void {
    if(this.dataTransfer.getExercise() != null || this.dataTransfer.getExercise() != undefined) {
      this.exercise = this.dataTransfer.getExercise();
      localStorage.setItem("exercise", this.exercise.name);
      localStorage.setItem("muscles", this.dataTransfer.convertToString(this.exercise.muscles));
      localStorage.setItem("tutorial", this.exercise.tutorial);
    }
      this.eid = localStorage.getItem("exercise");
      console.log(this.eid);
      this.muscles = localStorage.getItem("muscles");
      this.tutorial = localStorage.getItem("tutorial");
      this.videoId = this.tutorial!.slice(32);

    if(!this.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
  }

}
