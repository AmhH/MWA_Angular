import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div [ngStyle] ="{'text-align':'center'}">
              <h2>Welcome to {{title}}</h2>
            </div>
            <app-child [names] = names></app-child>
            <p myColor (colorChange)="clickedEvent($event)">change the color of this content<p>
              {{color}}`,
  styleUrls: []
})
export class AppComponent {
  title = 'Directive App';
  names: string[];
  color ='';
  constructor(){
    this.names = ["Nubia","Abysinia","Kush","Ethiopia"];
  }
  clickedEvent(color:string){
      this.color = color;
  }
}
