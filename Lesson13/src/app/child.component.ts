import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <p>Lists</p>
    <ul>
      <li *ngFor="let name of names"> {{name}}</li>
    </ul>
  `,
  styleUrls: [],
  inputs: ["names"]
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
