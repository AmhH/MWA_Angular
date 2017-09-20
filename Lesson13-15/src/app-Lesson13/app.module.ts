import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildComponent } from './child.component';
import { UpperDirective } from './Directive/upper.directive';
import { MyvisibilityDirective } from './Directive/myvisibility.directive';
import { MyColorDirective } from './Directive/my-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    UpperDirective,
    MyvisibilityDirective,
    MyColorDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
