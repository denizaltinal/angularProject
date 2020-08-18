import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthGuardService } from '../auth-guard.service';
import { AuthService } from '../auth.service';

AuthGuardService
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string
  password:string
  constructor(private authService: AuthService, 
    private router: Router, 
    private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    localStorage.setItem("Login","false")
  }

  onFormSubmit() {
    this.authService.login(this.username, this.password).subscribe(data => {
            
             
     
    });
 }

 goToRegister(){
   this.router.navigate(["register"])
 }

}
