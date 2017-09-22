import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, Validators, FormBuilder, FormArray, FormGroup } from '@angular/forms';

import { DataService } from '../service/data.service'

@Component({
  selector: 'app-my-comp',
  templateUrl: './my-comp.component.html',
  styleUrls: ['./my-comp.component.css']
})
export class MyCompComponent implements OnInit {
  myForm: FormGroup;
  private userData;
  private userPost;
  constructor(private fb: FormBuilder, private dataService: DataService) {
    this.myForm = this.fb.group({
      'name' : ['', Validators.required],
      'email': ['', Validators.compose([Validators.required, Validators.email])],
      'post' : ['', Validators.compose([Validators.required, this.legthValidator])]
    });
    this.myForm.statusChanges.subscribe(data => console.log(data));
   }

   legthValidator(control: FormControl):{[str: string]: boolean}{
      if (control.value.length < 10) {
        return { 'invalid': true };
      }
      return null;
   }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.myForm);
  }

  getData(){
    this.userData = new Promise((resolve, reject)=>{
      this.dataService.getUser().subscribe(res => resolve(res.json()));
    });

    this.userPost = new Promise((resolve, reject)=>{
      this.dataService.getPost().subscribe(res => resolve(res.json()));
    });
  }

}
