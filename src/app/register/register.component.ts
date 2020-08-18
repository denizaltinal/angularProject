import { Component, OnInit } from '@angular/core';
import { UserModule } from '../user/user.module';

import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username:string
  password:string
  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit() {
  }

  onFormSubmit() {
   
    this.authService.register(this.username, this.password).subscribe(data=>{

      this.router.navigate(["login"])
    });
 }
}
