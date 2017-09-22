import { Component, OnInit } from '@angular/core';
import { DataService } from '../data/data.service';

@Component({
  selector: 'student',
  template: `<ul *ngFor="let student of getStudentName()">
                  <li><a [routerLink] = "['profile', student.id]">{{student.name}}</a></li>
             </ul>`,
  styles: []
})
export class StudentComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  getStudentName() {
    return this.dataService.getdata();
  }
}
