import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public counterValue;

  constructor() {
    this.counterValue=5;
  }
  setValue(event) {
    this.counterValue = event;
  }
}