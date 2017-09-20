import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div [ngStyle] ="{'text-align':'center'}">
              <h2>Welcome to {{title}}</h2>
            </div>
            <app-child [names] = names></app-child>
            `,
  styleUrls: []
})
export class AppComponent {
  title = 'Directive App';
  names: string[];
  constructor(){
    this.names = ["Nubia","Abysinia","Kush","Ethiopia"];
  }
}
