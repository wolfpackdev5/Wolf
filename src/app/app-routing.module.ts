import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './aws/login/login.component';
import { RegisterComponent } from './aws/register/register.component';
import { ExerciseMenuComponent } from './exercise-menu/exercise-menu.component';
import { ExerciseInfoComponent } from './exercise-info/exercise-info.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '', component: HomeComponent},
  {path: 'emenu', component: ExerciseMenuComponent},
  {path: 'info', component: ExerciseInfoComponent},
  {path: '**', component: LoginComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
