import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { ProfileComponent } from './profile/profile.component';
import { ErrorComponent } from './error/error.component';
import { MyGuardService } from './my-guard/my-guard.service'

const My_Routes: Routes = [
    { path: '', redirectTo: "home", pathMatch:'full'},
    { path: "home", component: HomeComponent },
    { path: "student", component: StudentComponent },
    { path: "student/profile/:id", component: ProfileComponent/*, canActivate:[MyGuardService]*/ },
    { path: 'error', component: ErrorComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentComponent,
    ProfileComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(My_Routes)
  ],
  providers: [/*MyGuardService*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
