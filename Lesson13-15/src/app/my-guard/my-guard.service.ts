import { Injectable } from '@angular/core';
import { DataService } from '../data/data.service';
import { ActivatedRoute } from '@angular/router';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class MyGuardService implements CanActivate{
  data: any[];
  id: string;

  constructor(dataService: DataService, private router:Router) {
    this.data = dataService.getdata();
   }
   canActivate(route: ActivatedRouteSnapshot, state:RouterStateSnapshot ): Observable<boolean> | boolean{
      this.id = route.params.id;
      for (const student of this.data){
        if(student.id == this.id){
            return true;
        }
      }
      this.router.navigate(['error']);
   }

}
