import { Component } from '@angular/core';
import { DataService } from './data/data.service';

@Component({
  selector: 'app-root',
  template: `<div style="text-align:center">
                <h1> Welcome to {{title}}!!</h1>
            </div> <hr>
            <a [routerLink] = "['home']">Home</a>
            <a [routerLink] = "['student']">Students</a>
            <router-outlet></router-outlet>`,
  styleUrls: [],
  providers: [DataService]
})
export class AppComponent {
  title = 'Routing App';
}
