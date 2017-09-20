import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <p>Lists</p>
    <ul>
      <li upper *ngFor="let name of names"> {{name}}</li>
    </ul>
    <p [myvisibility]="true"> Visible Componenet templet.....</p>
    <p [myvisibility]="false"> Not Visible Componenet templet.....</p>
    
  `,
  styleUrls: [],
  inputs: ["names"]
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
