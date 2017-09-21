import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { ProfileComponent } from './profile/profile.component';

const My_Routes: Routes = [
    { path: '', redirectTo: "home", pathMatch:'full'},
    { path: "home", component: HomeComponent },
    { path: "student", component: StudentComponent },
    { path: "profile/:id", component: ProfileComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(My_Routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
