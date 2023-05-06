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
import { MatDialogModule } from '@angular/material/dialog';
import { ProfileComponent } from './home/profile-dialog/profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';

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
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,  
    YouTubePlayerModule,
    MatDialogModule, 
    BrowserAnimationsModule,
    MatInputModule, 
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
