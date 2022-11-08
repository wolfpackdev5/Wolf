import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './aws/login/login.component';
import { RegisterComponent } from './aws/register/register.component';
import { HomeComponent } from './home/home.component';
import { MessageModalComponent } from './aws/message-modal/message-modal.component';
import { ExerciseMenuComponent } from './exercise-menu/exercise-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { ExerciseInfoComponent } from './exercise-info/exercise-info.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { WorkoutComponent } from './workout/workout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    MessageModalComponent,
    ExerciseMenuComponent,
    ExerciseInfoComponent,
    WorkoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,  
    YouTubePlayerModule,  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
