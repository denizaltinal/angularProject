import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot,Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

 
  constructor(private router:Router, private authService: AuthService ) {
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean {

      //check some condition  
      if (localStorage.getItem("Login")!="true")  {
          alert('You are not allowed to view this page');
          this.router.navigate(["login"]);
 
          return false;
      } 
      return true;
  }
}
