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
import { NgxPaginationModule } from 'ngx-pagination';
import { ExerciseInfoComponent } from './exercise-info/exercise-info.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    MessageModalComponent,
    ExerciseMenuComponent,
    ExerciseInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
