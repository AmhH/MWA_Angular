import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-profile',
  template: ` <p>{{studentData.id}}</p>
              <p>{{studentData.name}}</p>
              <p>{{studentData.studId}}</p>
              <p>{{studentData.email}}</p>`,
  styles: []
})
export class ProfileComponent implements OnInit {
  id: string;
  studentData;
  constructor(private activate: ActivatedRoute, private dataService: DataService) {
    activate.params.subscribe(param => this.id = param.id);
    for(const student of dataService.getdata()){
      if(this.id==student.id){
        this.studentData = student; 
      }
    }
   }

  ngOnInit() {
  }

}
